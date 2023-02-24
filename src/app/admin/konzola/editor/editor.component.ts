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
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  menu = MENU;
  showFiller = false;
  showFiller1 = false;
  showFiller2 = false;
  //pager
  currentStepIndex = 0;
  stepsArray = Array(5).fill(0).map((x, i) => i);
  public steps = 5;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.steps - 1) {
      this.currentStepIndex++;
      this.updateStepIndicator();
    }
  }

  updateStepIndicator() {
    const stepIndicatorEls = document.querySelectorAll(".step-indicator");
    stepIndicatorEls.forEach((el, index) => {
      if (index === this.currentStepIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
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
