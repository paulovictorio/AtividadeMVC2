var User = require('../models/userModel');

exports.getUser = async function (req, res) {
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async function (req, res) {
    /** try {
        const result = User.save();
        res.status(200).send(User.toJSON())
    } catch (err) {
        res.status(500).json(err);
    } **/
    try {
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    await user.save()
    res.status(201).send(user.toJSON());
    } catch (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
        };
};

exports.details = async function (req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async function (req, res) {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async function (req, res) {
    const userId = req.params.id;
    const newData = {
        name: req.body.name,
        age: req.body.age
    };

    try{
        const result = await User.findByIdAndUpdate(userId, newData, { new: true})
        if (!result) {
            return res.status(404).json({ message: "Usuario não encontrado" });
        } 
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
}