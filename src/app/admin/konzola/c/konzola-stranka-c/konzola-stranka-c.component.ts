import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {cvicenie, zoznamCviceniC, zoznamCviceniLinux} from "../../../../models/cvicenie.model";
import {CvicenieCService} from "../../../../../Service/cvicenieC-service";

@Component({
  selector: 'app-konzola-stranka-c',
  templateUrl: './konzola-stranka-c.component.html',
  styleUrls: ['./konzola-stranka-c.component.css']
})
export class KonzolaStrankaCComponent implements OnInit {

  constructor(private router: Router, private cvicenieCService: CvicenieCService) { }

  ngOnInit(): void {
    this.obnovitCvicenia();
  }

  //Admin konzola
  @Input()
  cvicenieC: zoznamCviceniC[] = [];

  cvicenieNaUpravu?: cvicenie;

  obnovitCvicenia(): void {
    this.cvicenieCService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenieC = data;
    });
  }

  pridaj(cvicenie: cvicenie): void {
    this.cvicenieCService.createCvicenie(cvicenie).subscribe(() => {
      this.obnovitCvicenia();
    });
  }

  uprav(cvicenie: cvicenie): void {
    if(cvicenie.id !== undefined){
      this.cvicenieCService.updateCvicenie(cvicenie.id, cvicenie).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.cvicenieCService.getCviceniePodlaId(id).subscribe(data =>{
      this.cvicenieNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.cvicenieCService.deleteCvicenie(id).subscribe(() =>{
        this.obnovitCvicenia();
      });
    }
  }
}
