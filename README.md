# Theme Park Server

![Theme parkimage](/assets/GTY.gif)

## Description

This repo will house the database for our theme park project. It will include a MongoDB database with a Mongoose/Express backend. The repository for the theme park client is found [here.](https://github.com/pierocaceres/Theme_Park_Client) 

## Group Members

Team Leader: Piero Caceres

Member: David Wu

Member: Joshua Garinger

Member: Shane Brooks

## Entity Relation Diagram

![ERD](/assets/ThemePark%20ERD.jpg) 

## Website Layout

![Website Layout](/assets/Website%20Layout.jpg)

## Tasks

- [x] Assign group members their roles
- [x] Design the database with relationships

### Backend Task

- [x] Initialize directory with the following commands
```sh
npm init -y
npm install mongoose
npm install --save-dev chance
```
- [x] Server Middleware: body-parser & morgan
```sh
npm i body-parser
npm install morgan
npm i cors
npm i express
npm i nodemon
```

- [x] gitignore /node_modules .DS_Store
- [x] Create boiler plate for ./db/index.js
    - PORT = 3001
- [x] Create Schema --> ./models/model1.js
- [x] Create Model --> ./models/index.js
- [x] Create Seed --> /seed/{models1.js models2.js}
- [x] Connect Server to MongoDb --> server.js
- [x] Create Controllers --> ./controllers/controller1.js
- [x] Create Routes --> routes/index.js
- [ ] Deploy the MongoDB Database with Atlas
- [ ] Deploy the Express Server with Heroku

### Frontend Task

- [x] Build the React Frontend inside the project directory
```sh
npx create-react-app client
```
- [x] Set up a `.gitignore` file that prevents your application from pushing up `node_modules`
```sh
touch .gitignore
echo "node_modules" >> .gitignore
```
- [x] React Router Setup with the following commands. [Lesson on React Router](https://github.com/SEI-R-2-22/u2_lesson_react_router)
```sh
npm install react-router-dom
```
- [x] Install Axios
```sh
npm install axios
```
- [x] Configure application to use React Router. Done in index.js
- [x] Set up Routes on App.js
- [x] When using Axios, import axios
```sh
import axios from 'axios'
```
- [ ] Connect database with `axios` in the React App. Server's base URL will be http://localhost:3001/api/
  ```js
  const BASE_URL = 'http://localhost:3001/api'
  // When using the BASE_URL
  axios.get(`${BASE_URL}/someroute`)
  ```
- [ ] Deploy the React App with Heroku
