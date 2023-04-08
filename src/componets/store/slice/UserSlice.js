import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log('slicedata',action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
            console.log('delete',action.payload)
        },
        deleteUser(state, action) {
            // console.log('clear screen')
            return [] // one way
            //  return state= [] //second way
        },
    }
})
// console.log(userSlice)
export default userSlice.reducer;
export const { addUser, removeUser,deleteUser } = userSlice.actions