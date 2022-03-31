import React from "react"

class EpisodeService {

    private readonly url = 'https://api.tvmaze.com'

    public async fetchEpisodes(){
      const response = await fetch (`${this.url}/schedule`);

      return response.json();
    }

    public async fetchEpisodesCountry(country: string){
      const response = await fetch (`${this.url}/schedule?country=${country}`);

      return response.json();
    }

    public async fetchEpisodeWithId(id: any){
      const response = await fetch(`${this.url}/episodes/${id}?embed=show`)

      return response.json();
    }

    public async fetchShowWithId(id: any){
      const response = await fetch(`${this.url}/shows/${id}`)

      return response.json();
    }

    public async fetchEpisodeWithUrl(url: any){
      const response = await fetch(`${url}`)

      return response.json();
    }

}


export const episodeService = new EpisodeService();