import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const itemSlice = createSlice({
  contacts: {
    items: [],
    filter: ''
    },
    reducers: {
        newContact(state, action) {
            console.log(state);
            console.log(action);

            state.items.push({
                ...state,
                id: uuidv4(),
                contacts: action.payload.contacts
            })
      },
    }
},
);

export const { newContact } = itemSlice.actions;

export default itemSlice.reducer;

