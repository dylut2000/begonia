import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
} from '@angular/core'
import {provideRouter} from '@angular/router'
import {AUTH_FEATER_KEY, AUTN_REDUCER} from './core/auth/store/auth.reducer'

import {routes} from './app.routes'
import {ActionReducer, MetaReducer, provideState, provideStore} from '@ngrx/store'
import {provideEffects} from '@ngrx/effects'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {provideHttpClient} from '@angular/common/http'
import {AuthEffects} from './core/auth/store/auth.effects'
import {localStorageSync} from 'ngrx-store-localstorage'

export function authLocalStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: [AUTH_FEATER_KEY], rehydrate: true, storage: window.localStorage})(
    reducer
  )
}

const metaReducers: Array<MetaReducer<any, any>> = [authLocalStorageSyncReducer]

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({}, {metaReducers}),
    provideState(AUTH_FEATER_KEY, AUTN_REDUCER),
    provideEffects([AuthEffects]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
  ],
}
