import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokemon';
import { todoApi } from '../services/todos';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
    pokemonApi.middleware,
    todoApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
