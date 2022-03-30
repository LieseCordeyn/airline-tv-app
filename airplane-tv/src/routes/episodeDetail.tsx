import React, { useEffect, useState } from 'react';

import {useParams} from "react-router-dom"
import Header from '../components/Header/header'

;
import { episodeService } from '../services/episodeService';


function Details(){

    let params = useParams()
 
    const[episode, setEpisode] = useState() as any
    useEffect(() => {

    
      episodeService.fetchEpisodeWithId(params.Id)
      .then((response) => {
       setEpisode(response);
      })
       
     }, [])
     
   
 
    return(
        <section>
          <Header/>
            <h1>{episode["name"]}</h1>
        </section>
      )
    

}

export default Details
