import { configureStore } from '@reduxjs/toolkit';
import films from '../reducers/filmsSlice';
import filters from '../reducers/filtersSlice';

const stringMiddleware = () => (next: any) => (action: string) => {
    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = configureStore({
    reducer: { films, filters },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
