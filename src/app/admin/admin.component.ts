import { Component} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements CanActivate {

  constructor(private router: Router) {
  }

  username = '';
  password = '';

  login() {
    if (this.username === 'user' && this.password === 'user') {
      window.localStorage.setItem('isAuthorized', 'true');
      this.router.navigate(['/admin/konzola']);
    } else {
      window.alert('Invalid username or password');
    }
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Získajte uložený stav prihlásenia používateľa
    const isLoggedIn = localStorage.getItem('isAuthorized');

    // Ak nie je používateľ prihlásený, presmerujte ho na prihlasovaciu stránku
    if (!isLoggedIn) {
      this.router.navigate(['/admin']);
      return false;
    }

    // Ak je používateľ prihlásený, povoľte prístup k cieľovej stránke
    return true;
  }
}




