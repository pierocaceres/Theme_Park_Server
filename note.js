backend 

phase 1
    setup database => {
        npm init -y
        npm i mongoose
        
        gitignore /node_modules .DS_Store //prevents node upload and macOs tracking
        
        db db/index.js //connect mongoDB
        models/{rollerCoaster.js, themePark.js} // setup schema
        models/index.js // setup  Schema to model
        seed/ {rollerCoasters.js themeParks.js} //push to mongoDB
    }

phase 2
    setup server => {
        npm i express cors morgan body-parser

        server.js // import express , import routes, middleware, connect mongoDB 
        controllers/index.js // CRUD functions
        routes/index.js // endpoints connecting controllers
    }    
 phase 3
    deploy api

