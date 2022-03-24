const { Schema } = require('mongoose')

const RollerCoaster = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, require: true},    
        min_height: { type: String, require: true},
        max_spedd: { type: String, require: true},
        length: { type: String, require: true},
        type: { type: String, },
        location: {type: Schema.Types.ObjectId, ref: 'themeParks'}
    },
    { timestamps: true }
)

module.exports = RollerCoaster