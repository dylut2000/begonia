import {createReducer, on} from '@ngrx/store'
import {UserType} from '../models/auth.models'
import {
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAILURE,
  REGISTER_REQUEST_SUCCESS,
  LOGOUT,
} from './auth.actions'

export const AUTH_FEATER_KEY = 'auth'

export type AuthStateType = {
  user: UserType | null
  loading: boolean
  error: string | null
  isLoggedIn: boolean
}

export const AUTH_INITIAL_STATE: AuthStateType = {
  error: null,
  isLoggedIn: false,
  loading: false,
  user: null,
}

export const AUTN_REDUCER = createReducer(
  AUTH_INITIAL_STATE,
  on(REGISTER_REQUEST, (state) => ({...state, loading: true, error: null, isLoggedIn: false})),

  on(REGISTER_REQUEST_SUCCESS, (state, {user}) => ({
    ...state,
    loading: false,
    user,
    isLoggedIn: true,
  })),

  on(REGISTER_REQUEST_FAILURE, (state, {error}) => ({...state, loading: false, error})),
  on(LOGOUT, (state) => AUTH_INITIAL_STATE)
)
