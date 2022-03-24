const mongoose = require('mongoose')
const RollerCoasterSchema = require('./rollerCoaster')
const ThemeParkSchema = require('./themePark')

const RollerCoaster = mongoose.model('RollerCoaster', RollerCoasterSchema)
const ThemePark = mongoose.model('ThemePark', ThemeParkSchema)

module.exports = {
    RollerCoaster,
    ThemePark
}