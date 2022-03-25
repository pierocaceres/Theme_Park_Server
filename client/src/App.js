import './style/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import RollerCoaster from './components/RollerCoaster';
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import axios from 'axios';
import TPData from './data/themeParkData'
import RCData from './data/rollerCoasterData'
import ThemeParkPage from './pages/ThemeParkPage';
import RollerCoasterPage from './pages/RollerCoasterPage';

const BASE_URL = 'http://localhost:3001/api'

function App() {
  const [themeParks, setThemeParks] = useState([])
  const [rollerCoasters, setRollerCoaster] = useState([])
  
  let navigate = useNavigate()

  const getThemePark = async () => {
    // const result = await axios.get(`${BASE_URL}/theme-parks`)
    // console.log(result)
    // setThemeParks(result)   
    setThemeParks(TPData)
  }

  const getRollerCoaster = async () => {
    // const result = await axios.get(`${BASE_URL}/roller-coasters`)
    // setRollerCoaster(result)//Look at result path
    setRollerCoaster(RCData)
  }

  useEffect( () => {
    getThemePark()
    getRollerCoaster()
  }, [])


  return (
    <div className="App">
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home themeParks={themeParks} rollerCoasters={rollerCoasters} />}/>
          <Route path="/rollercoasters" element={<RollerCoaster rollerCoasters={rollerCoasters}/>}/>
          <Route exact path="/themeparks/:name" element={ <ThemeParkPage themeParks = {themeParks} />} />
          <Route exact path="/rollercoasters/:name" element={ <RollerCoasterPage rollerCoasters={rollerCoasters} />
          } />
        </Routes> 
       
      </main>   

    

    </div>
  );
}

export default App;