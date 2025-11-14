import {Routes} from '@angular/router'
import {Layout} from './shared/layout/layout'

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {path: '', loadChildren: () => import('./core/auth/auth.routes').then((m) => m.AUTH_ROUTES)},
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.routes').then((m) => m.HOME_ROUTES),
      },
    ],
  },
]
