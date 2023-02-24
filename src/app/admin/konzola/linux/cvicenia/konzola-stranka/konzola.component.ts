import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {cvicenie, zoznamCviceniLinux} from "../../../../../models/cvicenie.model";
import {cvicenieLinuxService} from "../../../../../../Service/Cvicenia/cvicenieLinux-service";

@Component({
  selector: 'app-konzola',
  templateUrl: './konzola.component.html',
  styleUrls: ['./konzola.component.css']
})
export class KonzolaComponent implements OnInit {

  //Admin konzola
  @Input()
  cvicenieLinux: zoznamCviceniLinux[] = [];
  cvicenieNaUpravu?: cvicenie;

  constructor(private router: Router, private cvicenieLinuxService: cvicenieLinuxService) {
  }

  ngOnInit(): void {
    this.obnovitCvicenia();
  }

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
    if (cvicenie.id !== undefined) {
      this.cvicenieLinuxService.updateCvicenie(cvicenie.id, cvicenie).subscribe(() => {
        this.obnovitCvicenia();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.cvicenieLinuxService.getCviceniePodlaId(id).subscribe(data => {
      this.cvicenieNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if (confirm('Naozaj chces zmazat?')) {
      this.cvicenieLinuxService.deleteCvicenie(id).subscribe(() => {
        this.obnovitCvicenia();
      });
    }
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }


  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }

}
