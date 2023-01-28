import {Component, Input, OnInit} from '@angular/core';
import {cvicenie, zoznamCviceniLinux} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieService} from "../../../../Service/cvicenie-service";

async function getDataFromApi(): Promise<zoznamCviceniLinux[]> {
  const response = await fetch('http://localhost:4200/cvicenia/linux');
  const data = await response.json();
  return data;
}

async function updateLinux() {
  const cvicenie: zoznamCviceniLinux[] = await getDataFromApi();
  console.log(cvicenie);
  const cvicenieLinux = cvicenie.filter((obj: zoznamCviceniLinux) => obj.language === "linux");
  console.log(cvicenieLinux);
}
@Component({
  selector: 'app-linux-zoznam',
  templateUrl: './linux-zoznam.component.html',
  styleUrls: ['./linux-zoznam.component.css']
})
export class LinuxZoznamComponent implements OnInit {

  @Input()
  cvicenie: zoznamCviceniLinux[] = [];

  constructor(private router: Router, private cvicenieService: CvicenieService) { }

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
