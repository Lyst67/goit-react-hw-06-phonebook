import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    contactList: contactsSlice.reducer,
  },
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
