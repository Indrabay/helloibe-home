import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: AuthState
}

export type AuthState = {
  token: string
  username: string
  roleID: number
  storeID: number
}

const initialState = {
  value: {
    token: "",
    username: "",
    roleID: 0,
    storeID: 0
  } as AuthState
} as InitialState

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (_, action: PayloadAction<AuthState>) => {
      return {
        value: {
          token: action.payload.token,
          username: action.payload.username,
          roleID: action.payload.roleID,
          storeID: action.payload.storeID
        }
      }
    }
  }
})

export const { logIn, logOut } = auth.actions;
export default auth.reducer;