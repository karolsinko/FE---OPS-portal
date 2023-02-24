import {Component} from '@angular/core';
import {Router} from '@angular/router';

//enum MENU {   HOME, QUIZ,SKRIPTA, CVICENIA, FAQ, ADMIN, C, LINUX,BASH}
enum MAINMENU { HOME, C, LINUX, BASH, ADMIN, FAQ}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  date = new Date();
  menu = MAINMENU;
  showFiller = false;

  constructor(private router: Router) {
  }

  /*
    public openMenu(m: MENU) {
      if (m === MENU.HOME) {
        this.router.navigate(['/']);
      }else if(m=== MENU.QUIZ){
        this.router.navigate(['/quiz']);
      }else if(m=== MENU.SKRIPTA){
        this.router.navigate(['/skripta']);
      }else if(m=== MENU.CVICENIA){
        this.router.navigate(['/cvicenia']);
      }else if(m=== MENU.FAQ){
        this.router.navigate(['/FAQ']);
      }else if(m=== MENU.ADMIN){
        this.router.navigate(['/admin']);
      } else if (m === MENU.C) {
        this.router.navigate(['/cvicenia/c']);
      }else if(m=== MENU.LINUX){
        this.router.navigate(['/cvicenia/linux']);
      }else if(m=== MENU.BASH){
        this.router.navigate(['/cvicenia/bash']);
      }
    }
  */
  public openMainMenu(m: MAINMENU) {
    if (m === MAINMENU.HOME) {
      this.router.navigate(['/']);
    } else if (m === MAINMENU.C) {
      this.router.navigate(['/c']);
    } else if (m === MAINMENU.LINUX) {
      this.router.navigate(['/linux']);
    } else if (m === MAINMENU.BASH) {
      this.router.navigate(['/bash']);
    } else if (m === MAINMENU.ADMIN) {
      this.router.navigate(['/admin']);
    } else if (m === MAINMENU.FAQ) {
      this.router.navigate(['/FAQ']);
    }
  }

  ngOnInit(): void {
    const token = localStorage.getItem("isAuthorized");

    if (!token) {
      // redirect to login page
    }
  }
}
