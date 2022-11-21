import { configureStore } from '@reduxjs/toolkit';
import { contactsBookReducer } from './contactsBookSlice';
import filterSlice from './filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsBookReducer,
    filter: filterSlice,
  },
});
