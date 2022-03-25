const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('themepark landing page'))

router.get('/theme-parks', controllers.getAllThemeParks)

router.get('/roller-coasters',controllers.getAllRollerCoasters)

router.get('/theme-parks/:id', controllers.getThemeParkbyId)

router.get('/roller-coasters/:id', controllers.getRollerCoasterbyId)

router.post('/theme-parks/:id', controllers.updateThemePark)

router.put('/roller-coasters/:id', controllers.updateRollerCoaster)

module.exports = router