var User = require('../models/userModel');
exports.getUser = function (req, res) {
    res.send('Olá! Testing controller');
};

exports.create = function (req, res) {
    let user = new User(
     {
     name: req.body.name,
     age: req.body.age
     }
     );
        user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((err) => {
            res.status(500).send({message: `${err.message} - falha ao cadastrar usuário.`})
        })
    };