import {Component, inject, signal} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {LOGIN_REQUEST} from '../store/auth.actions'

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  template: `
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul class="error-messages">
              @if(formError()) {
              <li>{{ formError() }}</li>
              }
            </ul>

            <form [formGroup]="form" (submit)="onSubmit()">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  formControlName="email"
                  type="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  formControlName="password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginPage {
  store = inject(Store)
  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern('')]],
    password: ['', Validators.required],
  })

  formError = signal('')

  onSubmit(): void {
    if (!this.form.valid) {
      this.formError.set('All fields are required')
      return
    }

    this.formError.set('')

    // this.store.dispatch(LOGIN_REQUEST({request: this.form.getRawValue()}))
  }
}
