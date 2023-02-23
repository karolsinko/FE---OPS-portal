import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

enum MENU {   HOME, QUIZC,SKRIPTAC, CVICENIAC}


@Component({
  selector: 'app-menu-c',
  templateUrl: './menu-c.component.html',
  styleUrls: ['./menu-c.component.css']
})
export class MenuCComponent implements OnInit {

  date=new Date();
  menu = MENU;

  constructor(private router: Router) { }

  public openMenu(m: MENU) {
    if (m === MENU.HOME) {
      this.router.navigate(['/']);
    }else if(m=== MENU.QUIZC){
      this.router.navigate(['/quiz/c']);
    }else if(m=== MENU.SKRIPTAC){
      this.router.navigate(['/skripta/c']);
    }else if(m=== MENU.CVICENIAC){
      this.router.navigate(['/cvicenia/c']);
    }
  }


  ngOnInit(): void {
    const token = localStorage.getItem("isAuthorized");

    if (!token) {
      // redirect to login page
    }
  }

  showFiller = false;
}
