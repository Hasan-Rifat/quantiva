// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { api } from './api';
import chatPromptReducer from './slices/chatPromptSlice';
import reportSlice from './slices/reportSlice';
import userReducer from './slices/userSlice';

// Combine your reducers
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  chatPrompt: chatPromptReducer,
  reports: reportSlice,
  user: userReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'reports'], // only persist the user slice (adjust as needed)
  // blacklist: [api.reducerPath] // optionally blacklist api cache
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ignore redux-persist actions
      },
    }).concat(api.middleware),
});

// Create persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
