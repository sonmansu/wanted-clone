import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        positionId: []
    },
    reducers: {
        add: (state, action) => {
            console.log(action);
            state.positionId.push(action.payload)
        },
        remove: (state, action) => {
            const idx = state.positionId.indexOf(action.payload)
            state.positionId.splice(idx, 1);
        },
        toggle: (state, action) => {
            const idx = state.positionId.indexOf(action.payload)
            if (idx === -1) {
                state.positionId.push(action.payload);
            } else {
                state.positionId.splice(idx, 1);
            }
        }
    }
})

export const { add, remove, toggle } = bookmarkSlice.actions;

export default bookmarkSlice.reducer

// console.log(bookmarkSlice.actions.add());
