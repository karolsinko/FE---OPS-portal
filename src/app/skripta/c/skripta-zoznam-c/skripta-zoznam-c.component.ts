import {Component, Input, OnInit} from '@angular/core';
import {zoznamSkriptLinux} from "../../../models/skripta.model";

@Component({
  selector: 'app-skripta-zoznam-c',
  templateUrl: './skripta-zoznam-c.component.html',
  styleUrls: ['./skripta-zoznam-c.component.css']
})
export class SkriptaZoznamCComponent implements OnInit {

  currentStepIndex = 0;
  @Input()
  skripta: zoznamSkriptLinux[] = [];

  constructor() {

  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.skripta.length - 1) {
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


  ngOnInit(): void {
  }
}
