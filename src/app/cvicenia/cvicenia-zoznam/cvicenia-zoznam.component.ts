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
    { title: '1', content: 'Vašou úlohou je vytvoriť pre automobilový bazár organizáciu áut dostupných na predaj. Pozor ale! Každá značka musí byť osobitne a zároveň každý model v nej. Bazár aktuálne ponúka jeden model od značky BMW s názvom M3 a dva modely od značky AUDI s názvami A3 a A4.' },
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
