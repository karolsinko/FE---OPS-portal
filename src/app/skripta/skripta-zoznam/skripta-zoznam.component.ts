import {Component, Input, OnInit} from '@angular/core';
import {zoznamCviceni} from "../../models/cvicenie.model";
import {zoznamSkript} from "../../models/skripta.model";

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
  skripta: zoznamSkript[] = [];

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
    { title: 'Úloha 2', content: 'Tu bude druha uloha' },
    { title: 'Úloha 3', content: 'Tu bude tretia uloha' }
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
