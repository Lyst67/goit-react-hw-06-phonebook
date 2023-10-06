import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const store = configureStore({
  reducer: {
    contactList: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
