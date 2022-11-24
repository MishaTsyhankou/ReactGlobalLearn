import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useHttp from '../Components/hooks/http.hooks';

import { FilmData } from '../Components/FilmDirectory/FilmDirectory';

export interface FilmState {
    films: FilmData[] | [];
    activeFilmId: string | number;
    filmsLoadingStatus: string;
}

const initialState: FilmState = {
    films: [],
    filmsLoadingStatus: 'idle',
    activeFilmId: '',
};

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const { request } = useHttp();
    return await request('http://localhost:4000/movies?limit=20');
});

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        filmsFetching: (state) => {
            state.filmsLoadingStatus = 'loading';
        },
        filmsFetched: (state, action) => {
            state.filmsLoadingStatus = 'idle';
            state.films = action.payload.data;
        },
        filmsFetchingError: (state) => {
            state.filmsLoadingStatus = 'error';
        },
        activeFilm: (state, action) => {
            state.activeFilmId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.filmsLoadingStatus = 'loading';
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.filmsLoadingStatus = 'idle';
                state.films = action.payload.data;
            })
            .addCase(fetchFilms.rejected, (state) => {
                state.filmsLoadingStatus = 'error';
            });
    },
});

const { actions, reducer } = filmsSlice;

export default reducer;
export const { filmsFetching, filmsFetched, filmsFetchingError, activeFilm } = actions;
