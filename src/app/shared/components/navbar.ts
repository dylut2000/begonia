import {Component, inject} from '@angular/core'
import {RouterLink, RouterLinkActive} from '@angular/router'
import {Store} from '@ngrx/store'
import {
  selectIsLoggegIn,
  selectUsername,
  selectImageUrl,
} from '../../core/auth/store/auth.selectors'
import {LOGOUT} from '../../core/auth/store/auth.actions'
import {AsyncPipe, TitleCasePipe} from '@angular/common'

@Component({
  selector: 'shared-navbar',
  imports: [RouterLink, RouterLinkActive, AsyncPipe, TitleCasePipe],
  template: `
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" routerLink="/home">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link" routerLinkActive="active" routerLink="/home">Home</a>
          </li>
          <!-- this -->
          @if (isLoggegInSignal()) {

          <li class="nav-item">
            <a class="nav-link" href="/editor"> <i class="ion-compose"></i>&nbsp;New Article </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/settings"> <i class="ion-gear-a"></i>&nbsp;Settings </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile/eric-simons">
              <img src="" class="user-pic" />
              {{ username$ | async | titlecase }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" (click)="onLogout()">Logout </a>
          </li>
          }@else {
          <!-- that -->
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/login">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/register">Sign up</a>
          </li>
          }
        </ul>
      </div>
    </nav>
  `,
})
export class Navbar {
  store = inject(Store)
  isLoggegInSignal = this.store.selectSignal(selectIsLoggegIn)
  username$ = this.store.select(selectUsername)

  onLogout(): void {
    this.store.dispatch(LOGOUT())
  }
}
