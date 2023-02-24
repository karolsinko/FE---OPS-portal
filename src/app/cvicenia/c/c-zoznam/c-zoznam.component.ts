import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceniC} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieCService} from "../../../../Service/Cvicenia/cvicenieC-service";

@Component({
  selector: 'app-c-zoznam',
  templateUrl: './c-zoznam.component.html',
  styleUrls: ['./c-zoznam.component.css']
})
export class CZoznamComponent implements OnInit {
  @Input()
  cvicenie: zoznamCviceniC[] = [];
  currentStepIndex = 0;
  showElement = false

  constructor(private router: Router, private cvicenieCService: CvicenieCService) {
  }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.cvicenie.length - 1) {
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

  showSolution() {
    this.showElement = !this.showElement;
  }

}
