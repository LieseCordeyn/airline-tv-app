import React, { useEffect, useState } from 'react'
import { episodeService } from '../services/episodeService'

function useDataPreviousEpisode(checkAvailability: any){
        let previousUrl: any = null
        const[previousEpisode, setPreviousEpisode] = useState([]) as any 

        if (checkAvailability["show"]) {
            previousUrl = checkAvailability["previousepisode"]["href"]
        }

        useEffect(() => {
            if(previousUrl !== null){
                episodeService.fetchEpisodeWithUrl(previousUrl)
                .then((x) => {
                 setPreviousEpisode(x);
            })
            }
        })
       

        let htmlPreviousEpisode: any

        if (previousEpisode.length > 0) {
            htmlPreviousEpisode =   
           <section>
           <h1>Previous Episode</h1>
          <p>{previousEpisode["name"]}</p>
           <p>Season: {previousEpisode["season"]}</p>
           <p>Episode: {previousEpisode["number"]}</p>
           </section>
          } else {
             htmlPreviousEpisode = "no previous episode available"
          }

        return htmlPreviousEpisode
}

export default useDataPreviousEpisode