import React from 'react';
import { useParams } from 'react-router-dom';
import Review from '../components/Review';


function ThemePark(props) {
   let {name} = useParams() 

   const themePark = props.themeParks.find((result) => name === result.name)
   
    return (
        <div className="info">
            <div className='info-picture' >
                <br />
                <img src={themePark.image} alt="themePark"/>
            </div>
            <div className="info-text">
                 <h1>{themePark.name} </h1>
                 <h4>{themePark.location}</h4>
                 <p>{themePark.description}</p>
                 <Review />
            </div>
        </div>
    );
}

export default ThemePark;