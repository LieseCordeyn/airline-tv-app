import React, {useEffect, useState} from 'react';
import Episode from './Episode/episode'
import './episode-list.css';
import {episodeService} from '../../services/episodeService'

async function countryCode(){
  
}

function getCountryCode(){

}

function useList(){
    const[episodes, setEpisodes] = useState([])
    useEffect(() => {

      episodeService.fetchEpisodes().then((response) => {
        setEpisodes(response);
      })


        document.getElementById('submitCountry')?.addEventListener('click', (e) => {
          episodeService.fetchEpisodesCountry("TW").then((response) => {
            setEpisodes(response)
          } )
        })

        document.getElementById('homeScreen')?.addEventListener('click', (e) => {
          episodeService.fetchEpisodes().then((response) => {
            setEpisodes(response);
          })
        })
       
     }, []);

   
 
    return(
      <main className="episodes" id="episodesOverview">
        {episodes.map(x =>{
         return <Episode  id={x["id"]} name={x["name"]} airtime ={x["airtime"]} summary = {x["summary"]} showName={x["show"]["name"]} showType={x["show"]["type"]}/>
         })}
      </main>
    
      ) 
}

export default useList