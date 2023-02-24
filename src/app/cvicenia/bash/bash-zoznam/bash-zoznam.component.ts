import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceniBash} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {cvicenieBashService} from "../../../../Service/Cvicenia/cvicenieBash-service";

@Component({
  selector: 'app-bash-zoznam',
  templateUrl: './bash-zoznam.component.html',
  styleUrls: ['./bash-zoznam.component.css']
})
export class BashZoznamComponent implements OnInit {
  @Input()
  cvicenie: zoznamCviceniBash[] = [];
  currentStepIndex = 0;
  showElement = false

  constructor(private router: Router, private cvicenieBashService: cvicenieBashService) {
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
