import { Component, OnInit } from '@angular/core';
import {cvicenie, zoznamUloh} from "../../models/cvicenie.model";
import {CvicenieService} from "../../../Service/cvicenie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia-stranka',
  templateUrl: './cvicenia-stranka.component.html',
  styleUrls: ['./cvicenia-stranka.component.css']
})
export class CviceniaStrankaComponent implements OnInit {

  ulohy: zoznamUloh[] = [];

  constructor(private router: Router, private cvicenieService: CvicenieService) { }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.cvicenieService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.ulohy = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

}
