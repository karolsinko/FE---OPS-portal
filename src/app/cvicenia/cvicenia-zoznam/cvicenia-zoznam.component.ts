import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceni} from "../../models/cvicenie.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cvicenia-zoznam',
  templateUrl: './cvicenia-zoznam.component.html',
  styleUrls: ['./cvicenia-zoznam.component.css']
})

export class CviceniaZoznamComponent implements OnInit {


    constructor(private http: HttpClient) {


    }

    ngOnInit(): void {
    }
/*
  currentStepIndex = 0;
  @Input()
  cvicenie: zoznamCviceni[] = [];

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
*/
}
