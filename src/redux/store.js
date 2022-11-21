import { configureStore } from '@reduxjs/toolkit';
import contactsBookSlice from './phoneBookSlice';
import filterSlice from './filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsBookSlice,
    filter: filterSlice,
  },
});
