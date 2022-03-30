import React, {useEffect, useState} from 'react';
import EpisodeComp from './Episode/episode'
import './episode-list.scss';
import {episodeService} from '../../services/episodeService'
import {useSelector, useDispatch} from 'react-redux';

import { fetchEpisodes } from '../../Store/Facade';
import {Episode, EpisodeState} from '../../Store/state'
import { selectEpisodes, selectEpisodesError} from '../../Store/Selectors'
import {StoreState} from '../../Store/storeState'

 function useList(){
  /////// WITH STORE ///////////

 const episodes = useSelector<EpisodeState, any>(
    selectEpisodes
  ); 
  
  

 const error = useSelector<EpisodeState, string>(
    selectEpisodesError
  ) 

  const dispatch = useDispatch();

 useEffect(() => {
  episodeService.fetchEpisodes()
  .then(response => {
    dispatch(fetchEpisodes(response));
  });
  }, [dispatch])


  return (
    <main className="episodes" id="episodesOverview">
      {
          episodes.map((x: any) => {
            return <EpisodeComp id={x["id"]} name={x["name"]} airtime ={x["airtime"]} summary = {x["summary"]} showName={x["show"]["name"]} showType={x["show"]["type"]}/>
          })}
    </main>
  ) 

 /////// WITH SERVICE /////////
    /*   const[episodes, setEpisodes] = useState([])
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
         return <EpisodeComp  id={x["id"]} name={x["name"]} airtime ={x["airtime"]} summary = {x["summary"]} showName={x["show"]["name"]} showType={x["show"]["type"]}/>
         })}
      </main>
    
      )  
      */

}

export default useList

