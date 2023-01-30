import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamSkript} from "../../models/skripta.model";
import {SkriptaService} from "../../../Service/skripta-service";

@Component({
  selector: 'app-skripta-stranka',
  templateUrl: './skripta-stranka.component.html',
  styleUrls: ['./skripta-stranka.component.css']
})
export class SkriptaStrankaComponent implements OnInit {

  constructor(private router: Router,private skriptaService: SkriptaService) { }

  skripta: zoznamSkript[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.skriptaService.getSkripta().subscribe(data => {
      console.log('Prislo: ', data);
      this.skripta = data;
    })
  }
}
