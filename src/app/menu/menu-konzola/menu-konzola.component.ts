import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

enum MENU {
  HOME,
  QUIZC,
  SKRIPTAC,
  CVICENIAC,
  QUIZBASH,
  SKRIPTABASH,
  CVICENIABASH,
  QUIZLINUX,
  SKRIPTALINUX,
  CVICENIALINUX,
}

@Component({
  selector: 'app-menu-konzola',
  templateUrl: './menu-konzola.component.html',
  styleUrls: ['./menu-konzola.component.css']
})
export class MenuKonzolaComponent implements OnInit {
  menu = MENU;
  showFiller = false;
  showFiller1 = false;
  showFiller2 = false;

  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['']);
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem("isAuthorized");

    if (!token) {
      // redirect to login page
    }
  }

  public openMenu(m: MENU) {
    if (m === MENU.HOME) {
      this.router.navigate(['/']);
    } else if (m === MENU.QUIZC) {
      this.router.navigate(['/admin/konzola/quiz/c']);
    } else if (m === MENU.SKRIPTAC) {
      this.router.navigate(['/admin/konzola/skripta/c']);
    } else if (m === MENU.CVICENIAC) {
      this.router.navigate(['/admin/konzola/cvicenia/c']);
    } else if (m === MENU.QUIZBASH) {
      this.router.navigate(['/admin/konzola/quiz/bash']);
    } else if (m === MENU.SKRIPTABASH) {
      this.router.navigate(['/admin/konzola/skripta/bash']);
    } else if (m === MENU.CVICENIABASH) {
      this.router.navigate(['/admin/konzola/cvicenia/bash']);
    } else if (m === MENU.QUIZLINUX) {
      this.router.navigate(['/admin/konzola/quiz/linux']);
    } else if (m === MENU.SKRIPTALINUX) {
      this.router.navigate(['/admin/konzola/skripta/linux']);
    } else if (m === MENU.CVICENIALINUX) {
      this.router.navigate(['/admin/konzola/cvicenia/linux']);
    }

  }
}
