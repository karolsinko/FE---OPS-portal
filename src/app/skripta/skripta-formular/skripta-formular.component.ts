import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-skripta-formular',
  templateUrl: './skripta-formular.component.html',
  styleUrls: ['./skripta-formular.component.css']
})
export class SkriptaFormularComponent implements OnInit {

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
