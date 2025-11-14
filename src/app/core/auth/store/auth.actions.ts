import {createAction, props} from '@ngrx/store'
import {LoginType, RegisterType, UserType} from '../models/auth.models'

export const REGISTER_REQUEST = createAction(
  '[Register] register user',
  props<{request: RegisterType}>()
)

export const REGISTER_REQUEST_SUCCESS = createAction(
  '[Register] register user success',
  props<{user: UserType}>()
)

export const REGISTER_REQUEST_FAILURE = createAction(
  '[Register] register user failure',
  props<{error: string}>()
)

export const LOGOUT = createAction('[Auth] Logging out')


export const LOGIN_REQUEST = createAction(
  '[LOGIN] LOGIN user',
  props<{request: LoginType}>()
)

export const LOGIN_REQUEST_SUCCESS = createAction(
  '[LOGIN] LOGIN user success',
  props<{user: UserType}>()
)

export const LOGIN_REQUEST_FAILURE = createAction(
  '[LOGIN] LOGIN user failure',
  props<{error: string}>()
)
