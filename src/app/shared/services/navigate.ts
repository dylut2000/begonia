import {inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class Navigate {
  router = inject(Router)

  moveTo(path: string): void {
    this.router.navigate([path])
  }
}
