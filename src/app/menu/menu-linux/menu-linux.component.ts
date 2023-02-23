import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

enum MENU {   HOME, QUIZLINUX,SKRIPTALINUX, CVICENIALINUX}

@Component({
  selector: 'app-menu-linux',
  templateUrl: './menu-linux.component.html',
  styleUrls: ['./menu-linux.component.css']
})
export class MenuLinuxComponent implements OnInit {

  date=new Date();
  menu = MENU;

  constructor(private router: Router) { }

  public openMenu(m: MENU) {
    if (m === MENU.HOME) {
      this.router.navigate(['/']);
    }else if(m=== MENU.QUIZLINUX){
      this.router.navigate(['/quiz/linux']);
    }else if(m=== MENU.SKRIPTALINUX){
      this.router.navigate(['/skripta/linux']);
    }else if(m=== MENU.CVICENIALINUX){
      this.router.navigate(['/cvicenia/linux']);
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
