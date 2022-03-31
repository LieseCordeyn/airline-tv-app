import React, { useEffect, useState } from 'react';

import {useNavigate, useParams} from "react-router-dom"
import Header from '../components/Header/header'
import './episodeDetail.scss'

import { episodeService } from '../services/episodeService';


function Details(props: any){
    let params = useParams()
    console.log(params)
    let navigate = useNavigate()
    

    const[episode, setEpisode] = useState([]) as any 
    const [show, setShow] = useState([]) as any
    useEffect(() => {
      episodeService.fetchEpisodeWithId(params.Id)
      .then((response) => {
       setEpisode(response);
      })
       
      }, [])  

      useEffect(() => {
        episodeService.fetchShowWithId(params.show)
        .then((response) => {
         setShow(response);
        })
         
        }, [])  

      const toNextEpisode = () => {
        const nextEpisodeId = episode["_embedded"]["show"]["_links"]["nextepisode"]["href"].replace('https://api.tvmaze.com/episodes/', '')
        console.log(nextEpisodeId)
          navigate(`/episode/${nextEpisodeId}`)
      }

      const toPreviousEpisode = () => {
        const previousEpisodeId = episode["_embedded"]["show"]["_links"]["previousepisode"]["href"].replace('https://api.tvmaze.com/episodes/', '')
        console.log(previousEpisodeId)
          navigate(`/episode/${previousEpisodeId}`)
      }


      console.log(show)
     

     
    return(
        <section>
          <Header/>
          
            <section id="allInfo">
                <section id="currentEpisode">
                <h1>{show["name"]} : {episode["name"]}</h1>
                      <section id="info">
                          <p>Show: {episode["name"]}</p>
                          <p>Season: {episode["season"]}</p>
                          <p>Episode: {episode["number"]}</p>
                          <p>Airtime: {episode["airdate"]} {episode["airtime"]}</p>
                          <p>Runtime: {episode["runtime"]} min</p>
                          <p>Summary: {episode["summary"] !== null && episode["summary"] !== ""? episode["summary"] : "No summary available"}</p>
                      </section>
                      <section id="buttonsOtherEp">
                          <button onClick={toNextEpisode}>
                            Next episode
                          </button>
                          <button onClick={toPreviousEpisode}>
                            Previous episode
                          </button> 
                      </section>
                </section>
                <section id="InfoShow">
                  <h2>Show info</h2>
                  <p>Name: {show["name"]}</p>
                  <p>Type: {show["type"]}</p>
                  <p>Language: {show["language"]}</p>
                  <p>Premiered: {show["premiered"]}</p>
                  <p>Ended: {show["ended"] !== null? show["ended"]: "/"}</p>
                 { /*<p>{show["summary"]}</p>*/}
                 <button>
                 <a href={show["officialSite"]} target="_blank">Visit website</a>
                 </button>
                </section>
            </section>    
        </section>

         
      )
    

}


export default Details
