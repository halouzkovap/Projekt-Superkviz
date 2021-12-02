import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import Player from '../Player';

const Dashboard=()=>{
    const [data, setData]=useState("");

    const fetchDashboard=()=>{
        fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json`)
        .then(response => response.json())
        .then(json => {setData(json); console.log(json);}) 
    }

    useEffect(()=>{
        fetchDashboard();
    })


    return(
        
            <main clqssName="main">

<div className="topscore">

    <h2 className="topscore__title">Žebříček nejlepších</h2>

    <ul className="topscore__list">

       { data && data.map(d => <Player name={d.name} score={d.score} />) }

    </ul>

</div>

</main>

        
        
    )

}
export default Dashboard;