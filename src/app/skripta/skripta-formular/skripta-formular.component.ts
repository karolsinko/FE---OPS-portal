import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamCviceni} from "../../models/cvicenie.model";

@Component({
  selector: 'app-skripta-formular',
  templateUrl: './skripta-formular.component.html',
  styleUrls: ['./skripta-formular.component.css']
})
export class SkriptaFormularComponent implements OnInit {

  step = [];

  currentStepIndex = 0;

  constructor(private router: Router) {

  }

  @Input()
  cvicenie: zoznamCviceni[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

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
