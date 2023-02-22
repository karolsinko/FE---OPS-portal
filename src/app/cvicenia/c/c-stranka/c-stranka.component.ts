import {Component, OnInit} from '@angular/core';
import {zoznamCviceniC} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieCService} from "../../../../Service/Cvicenia/cvicenieC-service";

@Component({
  selector: 'app-c-stranka',
  templateUrl: './c-stranka.component.html',
  styleUrls: ['./c-stranka.component.css']
})
export class CStrankaComponent implements OnInit {

  cvicenie: zoznamCviceniC[] = [];

  constructor(private router: Router, private cvicenieCService: CvicenieCService) { }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.cvicenieCService.getSortnuteCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenie = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }
}
