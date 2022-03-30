import {createAction} from '@reduxjs/toolkit';
import {Episode} from './state'

export const fetchEpisodes = createAction('@@EPISODES/FETCH');
export const fetchEpisodesSucces = createAction<Episode[]>(
    '@@EPISODES/FETCHSUCCES'
);

export const fetchEpisodesError = createAction<{
    results: Episode[];
}>('@@EPISODES/FETCHERROR')
