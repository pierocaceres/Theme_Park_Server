const db = require('..db')
const { ThemePark } = require('../models')

db.on('error', console.error.bind(console, 'MongoDb coonnection error:'))

const main = async () => {
    const themeParks = [
        {
            name: '',
            description: '',
            location: '',
            url: ''

        },
        {
            name: '',
            description: '',
            location: '',
            url: ''
        },
        {
            name: '',
            description: '',
            location: '',
            url: ''
        },
        {
            name: '',
            description: '',
            location: '',
            url: ''
        },
    ]

    await ThemePark.insertMany(themeParks)
    console.log('Created ThemeParks')
}
const run = async () => {
    await main()
    db.close()
}

run()