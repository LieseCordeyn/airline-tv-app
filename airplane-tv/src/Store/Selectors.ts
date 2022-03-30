import { createSelector } from '@reduxjs/toolkit';
import {StoreState} from './storeState';
import { Episode, EpisodeState} from './state';

export const selectEpisodes = (
    state: EpisodeState
): any  => {
    console.log("store",state.list);
    
    return state.list;
};

export const selectEpisodesError = (state: EpisodeState) => state?.error