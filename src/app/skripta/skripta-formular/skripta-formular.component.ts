import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamSkript} from "../../models/skripta.model";

@Component({
  selector: 'app-skripta-formular',
  templateUrl: './skripta-formular.component.html',
  styleUrls: ['./skripta-formular.component.css']
})
export class SkriptaFormularComponent implements OnInit {

  currentStepIndex = 0;

  constructor(private router: Router) {

  }

  @Input()
  skripta: zoznamSkript[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
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
    const stepIndicatorEls = document.querySelectorAll(".step-indicator-1");
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
