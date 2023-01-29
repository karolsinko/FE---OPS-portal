import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
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
}




