import React from 'react'

export default function ThemePark(props) {
    return (
           <div className="card">
                 <div className="card game-card" onClick={props.onClick}> 
                    <div className="image-wrapper">
                        <img src={props.image} alt="Theme Park"/>
                    </div>
                 <h1>{props.name}</h1>
                 </div>   
          </div>
      )
}