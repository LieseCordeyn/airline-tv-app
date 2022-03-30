import { Dispatch } from 'redux';
import { Episode } from './state';
import * as ACTIONS from './Actions'

const baseurl = "https://api.tvmaze.com"

export const fetchEpisodes = (results: any[]) => {
    return (dispatch: Dispatch): void => {
        dispatch(ACTIONS.fetchEpisodesSucces(results))
        
    }
}