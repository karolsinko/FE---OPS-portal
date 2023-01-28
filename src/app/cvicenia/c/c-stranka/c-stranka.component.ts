import { Component, OnInit } from '@angular/core';
import {zoznamCviceni} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieService} from "../../../../Service/cvicenie-service";

@Component({
  selector: 'app-c-stranka',
  templateUrl: './c-stranka.component.html',
  styleUrls: ['./c-stranka.component.css']
})
export class CStrankaComponent implements OnInit {

  cvicenie: zoznamCviceni[] = [];

  constructor(private router: Router, private cvicenieService: CvicenieService) { }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }
}
