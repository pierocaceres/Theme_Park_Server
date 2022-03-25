import React from 'react';
import { useNavigate } from 'react-router-dom'
import ThemePark from '../components/ThemePark'


function Home(props) {
    let navigate = useNavigate()

    return (
        <div>
            <h1> Welcome to our page </h1>
            <div className='Theme-Park'>
                <h2>Theme Parks</h2>
                <div className='container-grid'>
                    {props.themeParks.map((themePark) => (
                        <ThemePark 
                            image={themePark.image}
                            name={themePark.name}
                            onClick={() => navigate(`/themeparks/${themePark.name}`)}
                        />
                    ))}
                </div>
            </div>        
        </div>
    );
}

export default Home;