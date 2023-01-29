import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {cvicenie, zoznamCviceniBash, zoznamCviceniC, zoznamCviceniLinux} from "../../../../models/cvicenie.model";
import {cvicenieLinuxService} from "../../../../../Service/cvicenieLinux-service";

@Component({
  selector: 'app-konzola',
  templateUrl: './konzola.component.html',
  styleUrls: ['./konzola.component.css']
})
export class KonzolaComponent implements OnInit {

  constructor(private router: Router, private cvicenieLinuxService: cvicenieLinuxService) { }

  ngOnInit(): void {
    this.obnovitCvicenia();
  }

  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  //Admin konzola
  @Input()
  cvicenieLinux: zoznamCviceniLinux[] = [];

  cvicenieNaUpravu?: cvicenie;

  obnovitCvicenia(): void {
    this.cvicenieLinuxService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenieLinux = data;
    });
  }

  pridaj(cvicenie: cvicenie): void {
    this.cvicenieLinuxService.createCvicenie(cvicenie).subscribe(() => {
      this.obnovitCvicenia();
    });
  }

  uprav(cvicenie: cvicenie): void {
    if(cvicenie.id !== undefined){
      this.cvicenieLinuxService.updateCvicenie(cvicenie.id, cvicenie).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.cvicenieLinuxService.getCviceniePodlaId(id).subscribe(data =>{
      this.cvicenieNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.cvicenieLinuxService.deleteCvicenie(id).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }

  //pager
  currentStepIndex = 0;
  steps = 3;
  previousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateStepIndicator();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.steps - 1) {
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
}
