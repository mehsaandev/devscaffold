const Page = require('../models/pageModel.js')


const getPage = async (req, res) => {
    const { id } = req.params
    try {
        const page = await Page.findById(id)
        res.status(200).json(page)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPage = async (req, res) => {

    try {
        const page = req.body
        console.log(page)
        const newPage = new Page(page)
        await newPage.save()
        res.status(201).json(newPage)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updatePage = async (req, res) => {
    const { id } = req.params
    const page = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`)
}

const deletePage = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No page with id: ${id}`)
    await Page.findByIdAndRemove(id)
    res.json({ message: "page deleted successfully." })
}

module.exports = { getPage, createPage, updatePage, deletePage }