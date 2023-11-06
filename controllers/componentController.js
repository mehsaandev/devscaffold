const Component = require('../models/componentModel.js')


const getComponent = async (req, res) => {
    const { id } = req.params
    try {
        const component = await Component.findById(id)
        res.status(200).json(component)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createComponent = async (req, res) => {

    try {
        const component = req.body
        console.log(component)
        const newComponent = new Component(component)
        await newComponent.save()
        res.status(201).json(newComponent)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateComponent = async (req, res) => {
    const { id } = req.params
    const component = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No component with id: ${id}`)
}

const deleteComponent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No component with id: ${id}`)
    await Component.findByIdAndRemove(id)
    res.json({ message: "Component deleted successfully." })
}

module.exports = { createComponent, deleteComponent, updateComponent, getComponent }