import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {cvicenie, zoznamCviceniBash} from "../../../../../models/cvicenie.model";
import {cvicenieBashService} from "../../../../../../Service/Cvicenia/cvicenieBash-service";

@Component({
  selector: 'app-konzola-stranka-bash',
  templateUrl: './konzola-stranka-bash.component.html',
  styleUrls: ['./konzola-stranka-bash.component.css']
})
export class KonzolaStrankaBashComponent implements OnInit {

  constructor(private router: Router, private cvicenieBashService: cvicenieBashService) { }

  ngOnInit(): void {
    this.obnovitCvicenia();
  }

  //Admin konzola
  @Input()
  cvicenieBash: zoznamCviceniBash[] = [];

  cvicenieNaUpravu?: cvicenie;

  obnovitCvicenia(): void {
    this.cvicenieBashService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenieBash = data;
    });
  }

  pridaj(cvicenie: cvicenie): void {
    this.cvicenieBashService.createCvicenie(cvicenie).subscribe(() => {
      this.obnovitCvicenia();
    });
  }

  uprav(cvicenie: cvicenie): void {
    if(cvicenie.id !== undefined){
      this.cvicenieBashService.updateCvicenie(cvicenie.id, cvicenie).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.cvicenieBashService.getCviceniePodlaId(id).subscribe(data =>{
      this.cvicenieNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.cvicenieBashService.deleteCvicenie(id).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }
}
