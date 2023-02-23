import {Component, Input, OnInit} from '@angular/core';
import {zoznamSkriptLinux} from "../../../models/skripta.model";

@Component({
  selector: 'app-skripta-zoznam',
  templateUrl: './skripta-zoznam.component.html',
  styleUrls: ['./skripta-zoznam.component.css']
})
export class SkriptaZoznamComponent implements OnInit {

  currentStepIndex = 0;

  constructor() {

  }

  @Input()
  skripta: zoznamSkriptLinux[] = [];

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
