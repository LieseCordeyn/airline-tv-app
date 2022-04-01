import React from 'react';
import './episode.scss'
import {Link, Outlet} from "react-router-dom"
var striptags = require('striptags')


function episode(props: any){

var summary = ""
    if (props.summary !== null && props.summary !== ""){
            summary = striptags(props.summary)
            if(summary.length > 100){
                summary = summary.substr(0,100)
                summary = `${summary.substr(0, Math.min(summary.length, summary.lastIndexOf(" ")))}...`
                
            } 
    } else {
        summary = "summary not availabe"
    }

    
    
    
 
return (
    <div className="episode">
       
        <h1>{props.showName}</h1>
        <hr/>
        <div className="infoEpisode">
        <p>{props.airtime}</p>
        <p>{props.showType}</p>
        </div>
       
        
        <p id="summary">{summary} </p>
        <button><Link to={`/episode/${props.id}/show/${props.showId}`} id="linkButton">Show more</Link></button>
        <Outlet />
        
    </div>
)
}

export default episode;