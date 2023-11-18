const { default: mongoose } = require('mongoose')
const Page = require('../models/pageModel.js')
const Project = require('../models/projectModel.js')


const getPage = async (req, res) => {
    const { id } = req.params
    try {
        const page = await Page.findById(id)
        return res.status(200).json(page)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const getAllPagesOfProject = async (req, res) => {
    const { id } = req.params
    try {
        const page = await Page.find({ project_id: id })
        return res.status(200).json(page)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const createPage = async (req, res) => {

    try {

        console.log("asdas")
        const page = req.body
        // console.log(page)
        var projectIdValidity = mongoose.Types.ObjectId.isValid(page.project_id);

        if (!projectIdValidity) return res.status(400).json({ message: 'Invalid Project Id' })
        const projectObj = await Project.findById(page.project_id)
        if (!projectObj) return res.status(400).json({ message: 'Project not found' })
        const pageObj = await Page.findOne({ title: page.title, project_id: page.project_id })
        if (pageObj) return res.status(400).json({ message: 'Page with same name already exists' })

        const newPage = new Page(page)
        console.log(newPage)

        await newPage.save()
        return res.status(201).json({ response: 'Page Created Successfully' })
    } catch (error) {
        return res.status(409).json({ message: error.message })
    }
}

const updatePage = async (req, res) => {
    try {
        const { id } = req.params
        const page = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Page ID' })
        const pageObj = await Page.findById(id)
        if (!pageObj) return res.status(404).json({ message: 'Page not found' })


        const updatedPage = await Page.findByIdAndUpdate(id, page, {
            new: true,
        });

        console.log(updatedPage)

        res.status(201).json({ response: 'Page Updated Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const deletePage = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Page ID' })
        const pageObj = await Page.findById(id)
        if (!pageObj) return res.status(404).json({ message: 'Page not found' })


        await Page.findOneAndRemove({ _id: id });


        res.status(201).json({ response: 'Page Deleted Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = { getPage, createPage, updatePage, deletePage, getAllPagesOfProject }