import React,{useState} from 'react';
import './main.css';

import spider from '../../assets/spider.png';
import octopus  from '../../assets/octopus2.png';
import rhino  from '../../assets/rhino.png';
import scorpion  from '../../assets/scorpion.png';
import fisk  from '../../assets/fisk.png';
import electro  from '../../assets/electro.png';
import carnage  from '../../assets/carnage.png';
import venom  from '../../assets/venom.png';
import mysterio  from '../../assets/mysterio.png';

function Carousel(){
    const person = [{
        id:1,
        name:'Spider-Man',
        image:spider
    },{
        id:2,
        name:'Venom',
        image:venom

    },{
        id:3,
        name:'Rhino',
        image:rhino
    },{
        id:4,
        name:'Scorpion',
        image:scorpion
    },{
        id:5,
        name:'Fisk',
        image:fisk
    },{
        id:6,
        name:'Electro',
        image:electro
    },{
        id:7,
        name:'Dr.Octopus',
        image:octopus
    },{
        id:8,
        name:'Mysterio',
        image:mysterio
    },{
        id:9,
        name:'Carnage',
        image:carnage
    }
];
    return(
        <div className="container">
            <div className="carousel">
                { /* conteúdo do carrossel */}
                
            </div>
        </div>
    );
}

export default Carousel;