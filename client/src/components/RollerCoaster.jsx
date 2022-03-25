import React from "react";
import { useNavigate } from "react-router-dom";


const RollerCoaster = (props) => {                
    return (
        <div className="card">
            <div className="card game-card" onClick={props.onClick}> 
            <div className="image-wrapper">
                <img src={props.image} alt="Roller Coaster"/>
            </div>
            <h1>{props.name}</h1>
            </div>   
        </div>
    )
}

export default RollerCoaster;