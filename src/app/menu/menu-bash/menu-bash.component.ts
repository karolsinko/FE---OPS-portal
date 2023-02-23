import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

enum MENU {   HOME, QUIZBASH,SKRIPTABASH, CVICENIABASH}

@Component({
  selector: 'app-menu-bash',
  templateUrl: './menu-bash.component.html',
  styleUrls: ['./menu-bash.component.css']
})
export class MenuBashComponent implements OnInit {

  date=new Date();
  menu = MENU;

  constructor(private router: Router) { }

  public openMenu(m: MENU) {
    if (m === MENU.HOME) {
      this.router.navigate(['/']);
    }else if(m=== MENU.QUIZBASH){
      this.router.navigate(['/quiz/bash']);
    }else if(m=== MENU.SKRIPTABASH){
      this.router.navigate(['/skripta/bash']);
    }else if(m=== MENU.CVICENIABASH){
      this.router.navigate(['/cvicenia/bash']);
    }
  }


  ngOnInit(): void {
    const token = localStorage.getItem("isAuthorized");

    if (!token) {
      // redirect to login page
    }
  }

  showFiller = false;

  chodSpat(): void {
    this.router.navigate(['']);
  }

}
