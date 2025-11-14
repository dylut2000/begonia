import {Route} from '@angular/router'
import {LoginPage} from './components/login-page'
import {RegisterPage} from './components/register-page'

export const AUTH_ROUTES: Array<Route> = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPage},
  {path: 'register', component: RegisterPage},
]
