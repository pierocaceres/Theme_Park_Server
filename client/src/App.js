import './style/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import RollerCoaster from './components/RollerCoaster';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TPData from './data/themeParkData'
import RCData from './data/rollerCoasterData'
import Home from './pages/Home'
import RollerCoastersPage from './pages/RollerCoastersPage';  
import ThemeParkPage from './pages/ThemeParkPage';
import RollerCoasterPage from './pages/RollerCoasterPage';

const BASE_URL = 'http://localhost:3001/api'

function App() {
  const [themeParks, setThemeParks] = useState([])
  const [rollerCoasters, setRollerCoaster] = useState([])
  
  let navigate = useNavigate()

  const getThemePark = async () => {
    const result = await axios.get(`${BASE_URL}/theme-parks`)
    console.log(result.data.themeParks)
    setThemeParks(result.data.themeParks)   
    //setThemeParks(TPData)
  }

  const getRollerCoaster = async () => {
    const result = await axios.get(`${BASE_URL}/roller-coasters`)
    console.log(result.data.rollerCoasters)
    setRollerCoaster(result.data.rollerCoasters)
    // setRollerCoaster(RCData)
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
          <Route path="/" element={<Home themeParks={themeParks} rollerCoasters={rollerCoasters} />}/>
          {/* <Route path="/rollercoasters" element={<RollerCoaster rollerCoasters={rollerCoasters}/>}/> */}
          <Route path="/rollercoasters" element={<RollerCoastersPage rollerCoasters={rollerCoasters}/>} />
          <Route path="/themeparks/:name" element={ <ThemeParkPage themeParks = {themeParks} />} />
          <Route path="/rollercoasters/:name" element={ <RollerCoasterPage rollerCoasters={rollerCoasters} />
          } />
        </Routes> 
       
      </main>   
    </div>
  );
}

export default App;