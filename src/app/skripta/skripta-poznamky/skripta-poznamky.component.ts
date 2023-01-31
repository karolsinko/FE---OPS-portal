import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SkriptaService} from "../../../Service/skripta-service";
import {zoznamSkript} from "../../models/skripta.model";

@Component({
  selector: 'app-skripta-poznamky',
  templateUrl: './skripta-poznamky.component.html',
  styleUrls: ['./skripta-poznamky.component.css']
})
export class SkriptaPoznamkyComponent implements OnInit {

  currentStepIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  skripta: zoznamSkript[] = [];

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
    const stepIndicatorEls = document.querySelectorAll(".step-indicator-2");
    stepIndicatorEls.forEach((el, index) => {
      if (index === this.currentStepIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }
}
