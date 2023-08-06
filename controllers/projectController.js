const Project = require('../models/projectModel.js')

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find()
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
    const project = req.body
    console.log(project)
    const newProject = new Project(project)
    try {
        await newProject.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params
    const project = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`)   
}

const deleteProject = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`)
    await Project.findByIdAndRemove(id)
    res.json({ message: "Project deleted successfully." })
}

module.exports = {createProject, getAllProjects, getProject, updateProject, deleteProject}