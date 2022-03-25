import React from "react";
import { useNavigate } from "react-router-dom";


const RollerCoaster = (props) => {
    let navigate = useNavigate()
                
    return (
        <div className="container-grid">
            {/* <h2>Roller Coaster</h2> */}
            {props.rollerCoasters.map((rollerCoaster) => (
                <div className="card">
                    <div className="card game-card" onClick={() => navigate(`/rollercoasters/${rollerCoaster.name}`)}> 
                        <div className="image-wrapper">
                            <img src={rollerCoaster.image} alt="Roller Coaster"/>
                        </div>
                        <h1>{rollerCoaster.name}</h1>
                    </div> 
                </div>
            ))}      
        </div> 
    )
}

export default RollerCoaster;