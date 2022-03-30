export interface Episode {
    id: string;
    name: string;
    airtime: string;
    showName: string; 
    showType: string;
    summary: string;
}

export interface EpisodeState {
    loading: boolean;
    error: any;
    list: Episode[];
}

export const initialState = {
    loading: false,
    error: null,
    list: [],
};