var Project = require('../models/projectModel');

exports.getProject = async function (req, res) {
    try {
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = async function (req, res) {
    try {
    let project = new Project(
    {
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.body.assignedTo
    });
        await project.save()
        res.status(201).send(project.toJSON())

     } catch (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar projeto.`})
    
    };
};

exports.details = async function (req, res) {
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async function (req, res) {
    try {
        const result = await Project.findByIdAndDelete(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async function (req, res) {
    const projectId = req.params.id;
    const newData = {
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.body.assignedTo
    };

    try{
        const result = await Project.findByIdAndUpdate(projectId, newData, { new: true})
        if(!result) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }
        return res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
}