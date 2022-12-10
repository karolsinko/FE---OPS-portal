import { Component } from '@angular/core';
import {Router} from '@angular/router';

enum MENU { /*OSOBA, VAKCINA,OCKOVANOST,*/ HOME, QUIZ,SKRIPTA, CVICENIA}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  date=new Date();
  menu = MENU;

  constructor(private router: Router) { }

  public openMenu(m: MENU) {
    if (m === MENU.HOME) {
      this.router.navigate(['/']);
    }else if(m=== MENU.QUIZ){
      this.router.navigate(['/quiz']);
    }else if(m=== MENU.SKRIPTA){
      this.router.navigate(['/skripta']);
    }else if(m=== MENU.CVICENIA){
      this.router.navigate(['/cvicenia']);
    }
  }

}
