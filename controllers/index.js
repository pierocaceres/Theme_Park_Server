const { ThemePark, RollerCoaster } = require('../models')

const getAllThemeParks = async (req, res) => {
    try {
        const themeParks = await ThemePark.find()
        return res.status(200).json({ themeParks })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getAllRollerCoasters = async (req, res) => {
    try {
        const rollerCoasters = await RollerCoaster.find()
        return res.status(200).json({ rollerCoasters })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getThemeParkbyId = async (req, res) => {
    try {
        const { id } = req.params
        const themePark = await ThemePark.findById(id)
        if (themePark) {
            return res.status(200).json({ themePark })
        }
        return res.status(400).send('Theme park with the specified id does not exist!')
    } catch (err) {
        return res.status(500).send(err.message)
    }
} 

const getRollerCoasterbyId = async (req, res) => {
    try {
        const { id } = req.params
        const rollerCoaster = await RollerCoaster.findById(id)
        if (rollerCoaster) {
            return res.status(200).json({ rollerCoaster })
        }
        return res.status(400).send('Roller coaster with the specified id does not exist!')
    } catch (err) {
        return res.status(500).send(err.message)
    }
}  

const updateThemePark = async (req, res) => {
    try {
        const { id } = req.params
        const themePark = await ThemePark.findByIdAndUpdate(id, req.body, {new: true})
            if (!themePark) {
                res.status(500).send('Theme park not found!')
            }
            return res.status(200).json(themePark)
    } 
    catch (err) {
        return res.status(500).send(err.message)
    }
}

const updateRollerCoaster = async (req, res) => {
    try {
        const { id } = req.params
        const rollerCoaster = await RollerCoaster.findByIdAndUpdate(id, req.body, {new: true})
            if (!rollerCoaster) {
                res.status(500).send('Roller coaster not found!')
            }
            return res.status(200).json(rollerCoaster)
    } 
    catch (err) {
        return res.status(500).send(err.message)
    }
}



module.exports = {
    getAllThemeParks,
    getAllRollerCoasters,
    getThemeParkbyId,
    getRollerCoasterbyId,
    updateThemePark,
    updateRollerCoaster, 
}