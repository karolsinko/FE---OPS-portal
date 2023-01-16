import {Component, Input, OnInit} from '@angular/core';
import {zoznamUloh} from "../../models/cvicenie.model";

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
  ulohy: zoznamUloh[] = [];

  step = [
    {
      content: '     1)\n' +
        '            mkdir ford audi |' +
        '            mkdir -p bmw/M3 bmw/X5 |' +
        '            cd ford |' +
        '            mkdir mustang focus |' +
        '            cd audi |' +
        '            mkdir R8 |',
      content1:'2)'+
      '  cd ~ |'+
      '  mkdir oblecenie |'+
      '  mkdir nike adidas 4F |'+
      '  cd .. |'+
      '  cd nike |'+
      '  mkdir tenisky mikiny |'+
      '  cd .. |'+
      '  mkdir tricka nohavice |'+
      '  cd .. |'+
      ' mkdir zimne_bundy |'
    },
    { title: 'Úloha 2', content: 'Step 2 content goes here' },
    { title: 'Úloha 3', content: 'Step 3 content goes here' }
  ];


  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.step.length - 1) {
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
