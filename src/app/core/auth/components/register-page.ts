import {Component, inject, signal} from '@angular/core'
import {FormControl, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {REGISTER_REQUEST} from '../store/auth.actions'
import {RegisterType} from '../models/auth.models'

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  template: `
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <a href="/login">Have an account?</a>
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
                  formControlName="username"
                  type="text"
                  placeholder="Username"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  formControlName="imageUrl"
                  type="url"
                  placeholder="Image Link"
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
              <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegisterPage {
  store = inject(Store)
  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern('')]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    imageUrl: ['', Validators.required],
  })

  formError = signal('')

  onSubmit(): void {
    if (!this.form.valid) {
      this.formError.set('All fields are required')
      return
    }

    this.formError.set('')

    this.store.dispatch(REGISTER_REQUEST({request: this.form.getRawValue()}))
  }
}
