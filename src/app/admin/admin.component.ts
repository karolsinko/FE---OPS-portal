import {Component, Input} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {admin, zoznamAdminov} from "../models/admin.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements CanActivate {

  form: FormGroup;
  username = '';
  password = '';

  constructor(private router: Router) {
    this.form = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  @Input()
  set admin(data: admin | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  login() {
    if (this.username === 'user' && this.password === 'kajojepan') {
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

  private fillForm(admin: zoznamAdminov): void {
    this.form.controls['id'].setValue(admin.id);
    this.form.controls['username'].setValue(admin.username);
    this.form.controls['password'].setValue(admin.password);
  }
}




