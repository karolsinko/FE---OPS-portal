import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-konzola',
  templateUrl: './konzola.component.html',
  styleUrls: ['./konzola.component.css']
})
export class KonzolaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }
}
