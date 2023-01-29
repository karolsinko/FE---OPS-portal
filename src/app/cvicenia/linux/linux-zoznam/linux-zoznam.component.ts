import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceniLinux} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {cvicenieLinuxService} from "../../../../Service/cvicenieLinux-service";

@Component({
  selector: 'app-linux-zoznam',
  templateUrl: './linux-zoznam.component.html',
  styleUrls: ['./linux-zoznam.component.css']
})
export class LinuxZoznamComponent implements OnInit {

  @Input()
  cvicenie: zoznamCviceniLinux[] = [];

  constructor(private router: Router, private cvicenieLinuxService: cvicenieLinuxService) { }

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
