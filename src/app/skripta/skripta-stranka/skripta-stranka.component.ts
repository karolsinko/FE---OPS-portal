import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-skripta-stranka',
  templateUrl: './skripta-stranka.component.html',
  styleUrls: ['./skripta-stranka.component.css']
})
export class SkriptaStrankaComponent implements OnInit {

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
