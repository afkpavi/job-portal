import { User } from "@/app/types/user";
import { createSlice } from "@reduxjs/toolkit";


const initialState : User = {
    userName: 'pavi',
    userId: 1,
    isAdmin: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleAdmin: state => {
            state.isAdmin = !state.isAdmin
        }
    }
})

export default userSlice.reducer
export const {toggleAdmin} = userSlice.actions