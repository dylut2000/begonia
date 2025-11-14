import {Injectable, inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {EMPTY, of} from 'rxjs'
import {map, exhaustMap, catchError, tap} from 'rxjs/operators'
import {AuthService} from '../services/auth-service'
import {REGISTER_REQUEST, REGISTER_REQUEST_FAILURE, REGISTER_REQUEST_SUCCESS} from './auth.actions'
import {Navigate} from '../../../shared/services/navigate'

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions)
  private authService = inject(AuthService)
  private navigate = inject(Navigate)

  authRegister$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REGISTER_REQUEST),
      exhaustMap((request) =>
        this.authService.register(request.request).pipe(
          map((user) => {
            console.log(user)
            return REGISTER_REQUEST_SUCCESS({user})
          }),
          catchError((error) => of(REGISTER_REQUEST_FAILURE({error})))
        )
      )
    )
  })

  authRegisterSuccess$ = createEffect(
    () => {
      return inject(Actions).pipe(
        ofType(REGISTER_REQUEST_SUCCESS),
        tap(() => {
          this.navigate.moveTo('/home')
        })
      )
    },
    {dispatch: false}
  )
}
