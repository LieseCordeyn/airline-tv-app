import React, { useEffect, useState } from 'react'
import { episodeService } from '../services/episodeService'

function useDataNextEpisode(checkAvailability: any){
        let nexturl: any = null
        const[nextEpisode, setNextEpisode] = useState([]) as any 

        if (checkAvailability["nextepisode"]) {
            nexturl = checkAvailability["nextepisode"]["href"]
        }

        useEffect(() => {
            if(nexturl !== null){
                episodeService.fetchEpisodeWithUrl(nexturl)
                .then((x) => {
                 setNextEpisode(x);
            })
            }
        })
       

        let htmlNextEpisode: any

        if (nextEpisode.length > 0) {
            htmlNextEpisode =   
           <section>
           <h1>Next Episode</h1>
          <p>{nextEpisode["name"]}</p>
           <p>Season: {nextEpisode["season"]}</p>
           <p>Episode: {nextEpisode["number"]}</p>
           </section>
          } else {
             htmlNextEpisode = "no next episode available"
          }

        return htmlNextEpisode
}

export default useDataNextEpisode