import { Component, OnInit } from '@angular/core';
import {zoznamCviceni, zoznamCviceniBash, zoznamCviceniC} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieService} from "../../../../Service/cvicenie-service";
import {CvicenieCService} from "../../../../Service/cvicenieC-service";
import {cvicenieBashService} from "../../../../Service/cvicenieBash-service";

@Component({
  selector: 'app-bash-stranka',
  templateUrl: './bash-stranka.component.html',
  styleUrls: ['./bash-stranka.component.css']
})
export class BashStrankaComponent implements OnInit {

  cvicenie: zoznamCviceniBash[] = [];

  constructor(private router: Router, private CvicenieBashService:cvicenieBashService) { }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.CvicenieBashService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenie = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }
}
