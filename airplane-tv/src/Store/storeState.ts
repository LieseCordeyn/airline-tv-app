import {Store} from 'redux'
import {EpisodeState} from './state'

export interface StoreState extends Store {
    episodes: EpisodeState;
}