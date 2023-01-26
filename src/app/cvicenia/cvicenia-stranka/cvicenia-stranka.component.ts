import { Component, OnInit } from '@angular/core';
import {cvicenie, zoznamCviceni} from "../../models/cvicenie.model";
import {CvicenieService} from "../../../Service/cvicenie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia-stranka',
  templateUrl: './cvicenia-stranka.component.html',
  styleUrls: ['./cvicenia-stranka.component.css']
})
export class CviceniaStrankaComponent implements OnInit {

  cvicenie: zoznamCviceni[] = [];

  constructor(private router: Router, private cvicenieService: CvicenieService) { }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.cvicenieService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenie = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

}
