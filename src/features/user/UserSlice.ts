import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    email: string;
    token: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    name: "himanshu",
    email: "",
    token: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess(state, { payload }: PayloadAction<UserState>) {
            const { name, email, token } = payload;
            state.name = name;
            state.email = email;
            state.token = token;
            state.isLoggedIn = true;
        },
        logoutSuccess(state) {
            state.name = "";
            state.email = "";
            state.token = "";
            state.isLoggedIn = false;
        },
    },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;