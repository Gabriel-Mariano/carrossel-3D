import React, {useState, useEffect} from 'react';
import Card from '../card/card';

import {BiRightArrowCircle,BiLeftArrowCircle} from 'react-icons/bi';
import './main.css';

import spider from '../../assets/spider.png';
import octopus  from '../../assets/octopus.png';
import rhino  from '../../assets/rhino.png';
import scorpion  from '../../assets/scorpion.png';
import fisk  from '../../assets/fisk.png';
import electro  from '../../assets/electro.png';
import carnage  from '../../assets/carnage.png';
import venom  from '../../assets/venom.png';
import mysterio  from '../../assets/mysterio.png';

function Carousel(){
    const [selectIndex,setSelectIndex] = useState(0);
    const [angle,setAngle] = useState(0);
    const cellCount = 9;
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

function rotate(){
    var ang = selectIndex / cellCount * -360;
        setAngle(ang);
}
function prev(){
    setSelectIndex(selectIndex-1);
    console.log(selectIndex)
}
function next(){
    setSelectIndex(selectIndex+1);
    console.log(selectIndex)
}

useEffect(()=>{
    rotate();
},[selectIndex]);

    return(
        <div className="container">
            <h1></h1>
            <div className="carousel" style={{
                transform:'translateZ(-288px) rotateY(' + angle + 'deg)'
            }}>
                { /* conteúdo do carrossel */}
                {person.map((value,index)=>{
                    return (
                        <Card key={index} data={value}></Card>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={prev}><BiLeftArrowCircle fontSize={20} color='#282c38'></BiLeftArrowCircle></button>
                <button onClick={next}><BiRightArrowCircle fontSize={20} color='#282c38'></BiRightArrowCircle></button>
            </div>
        </div>
    );
}

export default Carousel;