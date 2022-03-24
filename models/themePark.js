const { Schema } = require('mongoose')

const ThemePark = new Schema(
    {
        name: { type: String, require: true},
        description: { type: String, require: true},
        location: { type: String, require: true},
        image: { type: String, require: true},
        url: {type: String, require: false}
    },
    { timestamps: true}
)

module.exports = ThemePark