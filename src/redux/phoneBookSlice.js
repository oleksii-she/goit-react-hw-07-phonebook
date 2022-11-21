import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsBookSlice.reducer;
// // 1. створюємо слайс
// import { createSlice } from '@reduxjs/toolkit';

// import { contactsData } from '../components/contactsData';

// //2 оголошую початковий стейт

// const initialState = contactsData;

// /// 3. створюэмо редюсер
// const contactsBookSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteTask } = contactsBookSlice.actions;

// export default contactsBookSlice.reducer;
