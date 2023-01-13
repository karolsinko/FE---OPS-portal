import {Component, Input, OnInit} from '@angular/core';
import {zoznamUloh} from "../../models/cvicenie.model";

@Component({
  selector: 'app-cvicenia-zoznam',
  templateUrl: './cvicenia-zoznam.component.html',
  styleUrls: ['./cvicenia-zoznam.component.css']
})
export class CviceniaZoznamComponent implements OnInit {
  currentStepIndex = 0;

  constructor() {

  }

  @Input()
  ulohy: zoznamUloh[] = [];

  step = [
    { title: 'Úloha 1', content: 'Step 1 content goes here' },
    { title: 'Úloha 2', content: 'Step 2 content goes here' },
    { title: 'Úloha 3', content: 'Step 3 content goes here' }
  ];

  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.step.length - 1) {
      this.currentStepIndex++;
    }
  }

  ngOnInit(): void {
  }
}
