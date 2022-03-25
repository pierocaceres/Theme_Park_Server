import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Review from '../components/Review';
import RollerCoaster from '../components/RollerCoaster';


function ThemePark(props) {
    let {name} = useParams() 

    let navigate = useNavigate()
    const themePark = props.themeParks.find((result) => name === result.name)

    const specificRollerCoaster = () => {
        const locationRollerCoaster = props.rollerCoasters.filter(rollerCoaster => 
            rollerCoaster.location === themePark._id
        )

        console.log(locationRollerCoaster)

        return locationRollerCoaster.map((rollerCoaster) => 
            <RollerCoaster key={rollerCoaster._id}
                name={rollerCoaster.name}
                image={rollerCoaster.image}
                onClick={() => navigate(`/rollercoasters/${rollerCoaster.name}`)}
            />
        )
    }
   
    return (
        <div >
            <div className="info">
                <div className='info-picture' >
                    <br />
                    <img src={themePark.image} alt="themePark"/>
                </div>
                <div className="info-text">
                    <h1>{themePark.name} </h1>
                    <h4>{themePark.location}</h4>
                    <p>{themePark.description}</p>
                    <Review id={themePark._id}/>
                </div>
            </div>
            <div className="Specific-rollercoaster">
                <div className="container-grid">
                {specificRollerCoaster()}
                </div>
            </div>
        </div>
        
    );
}

export default ThemePark;