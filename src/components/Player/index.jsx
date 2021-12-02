import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';

const Player=({name,score})=>{
    return(
        <li className="topscore__item">
            <span className="topscore__name">{name}</span>
            <span className="topscore__score">{score}</span>
        </li>
    )
}

export default Player;