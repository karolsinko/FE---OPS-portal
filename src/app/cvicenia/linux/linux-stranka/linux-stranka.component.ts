import { Component, OnInit } from '@angular/core';
import {zoznamCviceni} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {CvicenieService} from "../../../../Service/cvicenie-service";

@Component({
  selector: 'app-linux-stranka',
  templateUrl: './linux-stranka.component.html',
  styleUrls: ['./linux-stranka.component.css']
})
export class LinuxStrankaComponent implements OnInit {

  cvicenie: zoznamCviceni[] = [];

  constructor(private router: Router, private cvicenieService: CvicenieService) { }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }
}
