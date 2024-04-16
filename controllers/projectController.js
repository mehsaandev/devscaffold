const { mongoose } = require('mongoose')
const Project = require('../models/projectModel.js')

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getAllPublishedProjects = async (req, res) => {
    try {
        const projects = await Project.find({isPublished: true})
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getProject = async (req, res) => {
    const { id } = req.params
    try {
        const project = await Project.findById(id)
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createProject = async (req, res) => {

    try {
        const project = req.body
        console.log(project)
        const newProject = new Project(project)
        await newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

const updateProject = async (req, res) => {
    try {
        const { id } = req.params // Project ID
        const project = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const existingProjectObj = await Project.findById(id)
        if (!existingProjectObj) return res.status(404).json({ message: 'Project not found' })


        const updatedProject = await Project.findByIdAndUpdate(id, project, {
            new: true,
        });

        console.log(updatedProject)

        res.status(201).json({ response: 'Project Updated Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const publishProject = async (req, res) => {
    try {
        const { id } = req.params // Project ID

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const existingProjectObj = await Project.findById(id)
        if (!existingProjectObj) return res.status(404).json({ message: 'Project not found' })


        const updatedProject = await Project.findByIdAndUpdate(id, {isPublished: true}, {
            new: true,
        });

        console.log(updatedProject)

        res.status(201).json({ response: 'Project Published Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const unpublishProject = async (req, res) => {
    try {
        const { id } = req.params // Project ID
        const project = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const existingProjectObj = await Project.findById(id)
        if (!existingProjectObj) return res.status(404).json({ message: 'Project not found' })


        const updatedProject = await Project.findByIdAndUpdate(id, {isPublished: false}, {
            new: true,
        });

        console.log(updatedProject)

        res.status(201).json({ response: 'Project Published Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const moveToTrash = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const projObj = await Project.findById(id)
        if (!projObj) return res.status(404).json({ message: 'Project not found' })


        await Project.findByIdAndUpdate(id, { isDeleted: true });


        res.status(201).json({ response: 'Page Moved to Trash' })
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

const restoreFromTrash = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const projObj = await Project.findById(id)
        if (!projObj) return res.status(404).json({ message: 'Project not found' })


        await Project.findByIdAndUpdate(id, { isDeleted: false });


        res.status(201).json({ response: 'Page Moved to Trash' })
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

const getTrashProjects = async (req, res) => {
    try {
        const projects = await Project.find({ isDeleted: true })
        res.status(200).json(projects)
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }

}

const deleteProjectPermanently = async (req, res) => {
    try {
        const { id } = req.params
        console.log('checking',id)
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Project ID' })
        const pageObj = await Project.findById(id)
        if (!pageObj) return res.status(404).json({ message: 'Project not found' })


        await Project.findOneAndRemove({ _id: id });


        res.status(201).json({ response: 'Project Deleted Successfully' })
    } catch (error) {
        console.log(error)
        res.json({ message: error.message })
    }
}

module.exports = { createProject, getAllProjects, getProject, updateProject,publishProject,unpublishProject, moveToTrash,restoreFromTrash, deleteProjectPermanently, getAllPublishedProjects, getTrashProjects }