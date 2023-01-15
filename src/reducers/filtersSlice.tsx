import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useHttp from '../Components/hooks/http.hooks';

const initialState = {
    filtersLoadingStatus: 'idle',
    activeFilter: 'All',
    sortBy: 'vote_average',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: (state) => {
            state.filtersLoadingStatus = 'loading';
        },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
        },
        filtersFetchingError: (state) => {
            state.filtersLoadingStatus = 'error';
        },
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
        sortChanged: (state, action) => {
            state.sortBy = action.payload;
        },
    },
});

const { actions, reducer } = filtersSlice;

export default reducer;
export const { filtersFetching, filtersFetched, filtersFetchingError, filtersChanged, sortChanged } = actions;
