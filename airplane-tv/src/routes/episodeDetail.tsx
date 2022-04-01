import React, { useEffect, useState } from 'react';

import {useNavigate, useParams} from "react-router-dom"
import Header from '../components/Header/header'
import BackButton from '../components/Back-button/backButton'
import './episodeDetail.scss'
import { episodeService } from '../services/episodeService';
const striptags = require('striptags')




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

      let summary = ""

      if (episode["summary"] !== null && props.summary !== ""){
        
        summary = striptags(episode["summary"])
 
      } else {
        summary = "summary not availabe"
      }   

     
    return(
        <section>
          <Header/>
          <BackButton/>
            <section id="allInfo">
                <section id="currentEpisode">
                <h1>{show["name"]} : {episode["name"]}</h1>
                      <section id="info">
                          <p>Show: {episode["name"]}</p>
                          <p>Season: {episode["season"]}</p>
                          <p>Episode: {episode["number"]}</p>
                          <p>Airtime: {episode["airdate"]} {episode["airtime"]}</p>
                          <p>Runtime: {episode["runtime"]} min</p>
                          <p>Summary: {summary}</p>
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
                  <div id="InfoWithImage">
                    <div id="serieImage">
                      <img src={show?.image?.original} alt={show["name"]} height="170px" />
                      </div>
                    <div>
                      <p>Name: {show["name"]}</p>
                      <p>Type: {show["type"]}</p>
                      <p>Language: {show["language"]}</p>
                      <p>Premiered: {show["premiered"]}</p>
                      <p>Ended: {show["ended"] !== null? show["ended"]: "/"}</p>
                         
                    </div>
                  </div>
                  {show["officalSite"] !== null && show["officialSite"] !== ""?  
                      <button>
                      <a href={show["officialSite"]} target="_blank">Visit website</a>
                      </button> : ""}
                </section>
            </section>    
        </section>

         
      )
    

}


export default Details
