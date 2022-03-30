import { createReducer } from '@reduxjs/toolkit';
import { EpisodeState, initialState} from './state';
import * as ACTIONS from './Actions'

export const EpisodesReducer = createReducer<EpisodeState>(
    initialState,
    (builder) => {
        builder.addCase(ACTIONS.fetchEpisodes, (state): EpisodeState => {
            return {
                ...state,
                loading: true,
                error: null,
                list: []
            };
        });

        builder.addCase(
            ACTIONS.fetchEpisodesSucces,
            (state, action): EpisodeState => {
                return {
                    ...state,
                    loading: false,
                    error: null,
                    list: action.payload,
                }
            }
        );

        builder.addCase(
            ACTIONS.fetchEpisodesError,
            (state, action): EpisodeState => {
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                    list: [],
                }
            }
        )

    }
)