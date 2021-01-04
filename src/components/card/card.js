import React from 'react';
import './card.css';


function Card(props){
    console.log(props.data);
    return(
        <div className="card" >
            <img src={props.data.image} alt={props.data.name}/>
        </div>
    );
}

export default Card;