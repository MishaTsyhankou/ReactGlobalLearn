import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import useHttp from '../Components/hooks/http.hooks';

import { FilmData } from '../Components/FilmDirectory/FilmDirectory';

export interface FilmState {
    films: FilmData[] | [];
    activeFilmId: string | number;
    filmsLoadingStatus: string;
    newFilms: FilmData[] | [];
    currentFilm: FilmData[];
}

const initialState: FilmState = {
    films: [],
    filmsLoadingStatus: 'idle',
    activeFilmId: '',
    newFilms: [],
    currentFilm: [],
};

interface formValues {
    title: string;
    relaseDate: string;
    url: string;
    rating: number;
    genre: Array<string>;
    runtime: string;
    overview: string;
    id: number;
}

export const addNewFilms = createAsyncThunk('films/addFilms', async (body: formValues) => {
    const { request } = useHttp();
    const { title, overview, runtime, genre, rating } = body;

    const newFilm = {
        title: `${title}`,
        tagline: "Here's to the fools who dream.",
        vote_average: Number(rating),
        vote_count: 6782,
        release_date: '2016-12-29',
        poster_path:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqxVajSr5w1yOporIp1nZ7-nVCBDshoD3_wmskTqzJ2Il_ElApi1dIDYWmY7MGtPnHoY&usqp=CAU',
        overview: `${overview}`,
        revenue: 445435700,
        runtime: Number(runtime),
        genres: [`${`${genre}`}`],
    };
    console.log(
        'add',
        request().then((data) => {
            data;
        })
    );
    console.log(JSON.stringify(newFilm));
    return await request('http://localhost:4000/movies', 'POST', JSON.stringify(newFilm));
});

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const { request } = useHttp();
    return await request('http://localhost:4000/movies?limit=20', 'GET');
});

export const removeFilms = createAsyncThunk('films/removeFilms', async (id) => {
    const { request } = useHttp();
    return await request(`http://localhost:4000/movies/${id}`, 'DELETE');
});

export const fetchCurrentFilm = createAsyncThunk('films/fetchCurrentFilm', async (id: number) => {
    const { request } = useHttp();
    return await request(`http://localhost:4000/movies/${id}`, 'GET');
});

export const updateFilm = createAsyncThunk('films/updateFilm', async (body: formValues) => {
    const { request } = useHttp();

    const { title, overview, runtime, genre, rating, url, id, relaseDate } = body;

    console.log('body', body);
    const updatedFilm = {
        title: `${title}`,
        tagline: "Here's to the fools who dream.",
        vote_average: Number(rating),
        vote_count: 6782,
        release_date: `${relaseDate}`,
        poster_path: url,
        overview: `${overview}`,
        revenue: 445435700,
        runtime: Number(runtime),
        genres: [...genre],
        id: id,
    };

    console.log('updateFil', updatedFilm);
    return await request('http://localhost:4000/movies', 'PUT', JSON.stringify(updatedFilm));
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
        // addFilms: (state, action) => {
        //     state.newFilms = [...state.films].push(action.payload)
        // }
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
            })
            .addCase(fetchCurrentFilm.fulfilled, (state, action) => {
                state.filmsLoadingStatus = 'idle';
                state.currentFilm = action.payload;
            });
        // .addCase(addNewFilms.fulfilled, (state, action)=>{
        //      state.newFilms.push(action.payload)
        // })
    },
});

const { actions, reducer } = filmsSlice;

export default reducer;
export const { filmsFetching, filmsFetched, filmsFetchingError, activeFilm } = actions;
