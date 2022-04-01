import React, {useEffect, useRef, useState} from 'react';
import EpisodeComp from './Episode/episode'
import './episode-list.scss';
import {episodeService} from '../../services/episodeService'
import {useSelector, useDispatch} from 'react-redux';



import { fetchEpisodes } from '../../Store/Facade';
import {Episode, EpisodeState} from '../../Store/state'
import { selectEpisodes, selectEpisodesError} from '../../Store/Selectors'
import {StoreState} from '../../Store/storeState'
 


function useList(this: any){
  /////// WITH STORE ///////////

  const [country, setCountry] = useState('')
let countrySet = false
 const episodes = useSelector<EpisodeState, any>(
    selectEpisodes
  ); 

 const error = useSelector<EpisodeState, string>(
    selectEpisodesError
  ) 

  const dispatch = useDispatch();


 useEffect(() => {
   if(countrySet == false){
    episodeService.fetchEpisodes()
      .then(response => {
      dispatch(fetchEpisodes(response));
    });
   } else {
    episodeService.fetchEpisodesCountry(country)
    .then(response => {
    dispatch(fetchEpisodes(response));
  });
   }
  
  }, [dispatch])

  const useDataCountry = (e: any) => {
    e.preventDefault()

   countrySet = false;
      episodeService.fetchEpisodesCountry(country)
      .then(response => {
        dispatch(fetchEpisodes(response));
      });
  
  }



  return (
    <section>
      <form>
        <input placeholder="Country in ISO 3166-1 code " onChange={event => setCountry(event.target.value)}/>
        <button onClick={useDataCountry}id="countryButton">Search country</button>
      </form>
    <main className="episodes" id="episodesOverview" >
      {
          episodes.map((x: any) => {
            return <EpisodeComp id={x["id"]} showId={x["show"]["id"]} name={x["name"]} airtime ={x["airtime"]} summary = {x["summary"]} showName={x["show"]["name"]} showType={x["show"]["type"]}/>
          })}
    </main>
    </section>
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

