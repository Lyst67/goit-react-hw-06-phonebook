import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filters: '',
};

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { filterContacts } = filterSlice.actions;
