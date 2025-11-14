import {inject, Injectable} from '@angular/core'
import {catchError, Observable, throwError} from 'rxjs'
import {LoginType, RegisterType, UserType} from '../models/auth.models'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient)

  register(user: RegisterType): Observable<UserType> {
    return this.http.post<UserType>(`${environment.API}/users`, user).pipe(
      catchError((error) => {
        console.error('An error occurred:', error)
        // Handle specific error codes or types
        if (error.status === 404) {
          // Display a "Not Found" message
        }
        return throwError(() => new Error('Something went wrong.'))
      })
    )
  }

  login(user: LoginType): Observable<Array<UserType>> {
    return this.http
      .post<Array<UserType>>(
        `${environment.API}/users?email=${user.email}&password=${user.password}`,
        user
      )
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error)
          // Handle specific error codes or types
          if (error.status === 404) {
            // Display a "Not Found" message
          }
          return throwError(() => new Error('Something went wrong.'))
        })
      )
  }
}
