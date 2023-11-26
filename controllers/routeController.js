const Route = require('../models/routeModel.js')
const { default: mongoose } = require('mongoose')

const getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.find()
        res.status(200).json(routes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getRoute = async (req, res) => {
    const { id } = req.params
    try {
        const route = await Route.findById(id)
        res.status(200).json(route)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createRoute = async (req, res) => {

    try {
        const route = req.body
        console.log(route)
        const newRoute = new Route(route)
        await newRoute.save()
        res.status(201).json(newRoute)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateRoute = async (req, res) => {
    try {
        const { id } = req.params 
        const route = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Route ID' })
        const existingRouteObj = await Route.findById(id)
        if (!existingRouteObj) return res.status(404).json({ message: 'Route not found' })


        const updatedRoute = await Route.findByIdAndUpdate(id, route, {
            new: true,
        });

        console.log(updatedRoute)

        res.status(201).json({ response: 'Project Updated Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const deleteRoute = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ message: 'Invalid Route ID' })
        const routeObj = await Route.findById(id)
        if (!routeObj) return res.status(404).json({ message: 'Route not found' })


        await Route.findOneAndRemove({ _id: id });


        res.status(201).json({ response: 'Route Deleted Successfully' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {getAllRoutes, getRoute, createRoute, updateRoute, deleteRoute }