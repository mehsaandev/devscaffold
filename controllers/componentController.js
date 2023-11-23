const { default: mongoose } = require('mongoose')
const Component = require('../models/componentModel.js')


const getAllComponents = async (req, res) => {
    try {
        const components = await Component.find()
        res.status(200).json(components)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


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
        const compObj = await Component.findOne({ name: component.name, component_id: component.component_id })
    
        if (compObj) return res.status(400).json({ message: 'Component with same name already exists' })
        const newComponent = new Component(component)

        await newComponent.save()
        res.status(201).json(newComponent)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


const updateComponent = async (req, res) => {
    try {
        const { id } = req.params
        const component = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const compObj = await Component.findById(id)
        if (!compObj) return res.status(404).json({ message: 'Component not found' })


        const updatedComp = await Component.findByIdAndUpdate(id, {content: component.content}, {
            new: true,
        });

        console.log(updatedComp)

        res.status(201).json({ response: 'Component Updated Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


const deleteComponent = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const compObj = await Component.findById(id)
        if (!compObj) return res.status(404).json({ message: 'Component not found' })

        await Component.findOneAndRemove({ _id: id });

        res.status(201).json({ response: 'Component Deleted Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const publishComponent = async (req, res) => {
    try {
        const { id } = req.params 

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const existingCompObj = await Component.findById(id)
        if (!existingCompObj) return res.status(404).json({ message: 'Component not found' })

        const updatedComp = await Component.findByIdAndUpdate(id, {isPublished: true}, {
            new: true,
        });

        console.log(updatedComp)

        res.status(201).json({ response: 'Component Published Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const unpublishComponent = async (req, res) => {
    try {
        const { id } = req.params
        // const project = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const existingCompObj = await Component.findById(id)
        if (!existingCompObj) return res.status(404).json({ message: 'Component not found' })


        const updatedComp = await Component.findByIdAndUpdate(id, {isPublished: false}, {
            new: true,
        });

        console.log(updatedComp)

        res.status(201).json({ response: 'Component Published Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const moveToTrash = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const compObj = await Component.findById(id)
        if (!compObj) return res.status(404).json({ message: 'Component not found' })


        await Component.findByIdAndUpdate(id, { isDeleted: true });


        res.status(201).json({ response: 'Component Moved to Trash' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const restoreFromTrash = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Component ID' })
        const compObj = await Component.findById(id)
        if (!compObj) return res.status(404).json({ message: 'Component not found' })


        await Component.findByIdAndUpdate(id, { isDeleted: false });


        res.status(201).json({ response: 'Component Moved to Trash' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = { createComponent, deleteComponent, updateComponent, getComponent, getAllComponents, publishComponent, unpublishComponent, moveToTrash, restoreFromTrash }