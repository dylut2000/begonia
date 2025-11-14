import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <shared-navbar />
    <router-outlet />
    <shared-footer />
  `,
  styles: ``,
})
export class Layout {}
