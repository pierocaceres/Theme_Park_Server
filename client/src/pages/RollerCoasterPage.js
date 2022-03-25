import React from 'react';
import { useParams } from 'react-router-dom';

function RollerCoaster(props) {
    let {name} = useParams() 

    const rollerCoaster = props.rollerCoasters.find((result) => name === result.name)

    return (
        <div className="info-coaster">
            <h1> {rollerCoaster.name} </h1>
            <div className="info">
                <div className='info-picture' >
                    <img src={rollerCoaster.image} alt="rollerCoaster"/>
                </div>
                <div className="info-text">
                    <h4>Minimum height: {rollerCoaster.min_height}</h4>
                    <h4>Length: {rollerCoaster.length}</h4>
                    <h4>Max Speed: {rollerCoaster.max_speed}</h4>
                    <h4>Type of roller coaster:</h4>
                    <ul>
                        {rollerCoaster.type.map(type => {return <li>{type}</li>})}
                    </ul>
                    <p> {rollerCoaster.description}</p>
                </div>
            </div>
        </div>
    );
}

export default RollerCoaster;