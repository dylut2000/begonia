import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AUTH_FEATER_KEY, AuthStateType} from './auth.reducer'

export const selectAuthState = createFeatureSelector<AuthStateType>(AUTH_FEATER_KEY)

// default state

export const selectIsLoggegIn = createSelector(selectAuthState, (state) => state.isLoggedIn)
export const selectError = createSelector(selectAuthState, (state) => state.error)
export const selectUser = createSelector(selectAuthState, (state) => state.user)
export const selectLoading = createSelector(selectAuthState, (state) => state.loading)

// custom selectors

export const selectUsername = createSelector(selectUser, (user) => user?.username)
export const selectImageUrl = createSelector(selectUser, (user) => user?.imageUrl)
export const selectUserId = createSelector(selectUser, (user) => user?.id)
