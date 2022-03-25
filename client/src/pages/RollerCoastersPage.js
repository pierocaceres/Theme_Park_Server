import React from 'react';
import { useNavigate } from "react-router-dom";
import RollerCoaster from '../components/RollerCoaster';

function RollerCoasters(props) {

    let navigate = useNavigate()

    return (
        <div>
            <h2>Roller Coaster</h2>
            <div className="container-grid">
                {props.rollerCoasters.map((rollerCoaster) => (
                    <RollerCoaster key={rollerCoaster._id} 
                        name={rollerCoaster.name}
                        image={rollerCoaster.image}
                        onClick={() => navigate(`/rollercoasters/${rollerCoaster.name}`)}
                    />
                ))}
            </div>            
        </div>
    );
}

export default RollerCoasters;