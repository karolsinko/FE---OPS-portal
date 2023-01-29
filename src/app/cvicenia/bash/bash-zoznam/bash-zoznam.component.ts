import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceniBash, zoznamCviceniC} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {cvicenieBashService} from "../../../../Service/cvicenieBash-service";

@Component({
  selector: 'app-bash-zoznam',
  templateUrl: './bash-zoznam.component.html',
  styleUrls: ['./bash-zoznam.component.css']
})
export class BashZoznamComponent implements OnInit {
  @Input()
  cvicenie: zoznamCviceniBash[] = [];

  constructor(private router: Router, private CvicenieBashService: cvicenieBashService) { }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }

  currentStepIndex = 0;

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
  showElement = false

  showSolution(){
    this.showElement = !this.showElement;
  }
}
