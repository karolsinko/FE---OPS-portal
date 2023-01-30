import {Component, OnInit} from '@angular/core';
import {zoznamCviceniLinux} from "../../../models/cvicenie.model";
import {Router} from "@angular/router";
import {cvicenieLinuxService} from "../../../../Service/cvicenieLinux-service";

@Component({
  selector: 'app-linux-stranka',
  templateUrl: './linux-stranka.component.html',
  styleUrls: ['./linux-stranka.component.css']
})
export class LinuxStrankaComponent implements OnInit {

  cvicenie: zoznamCviceniLinux[] = [];

  constructor(private router: Router, private cvicenieLinuxService: cvicenieLinuxService) { }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.cvicenieLinuxService.getCvicenia().subscribe(data => {
      console.log('Prislo: ', data);
      this.cvicenie = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['/cvicenia']);
  }
}