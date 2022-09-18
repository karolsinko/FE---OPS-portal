import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-skripta',
  templateUrl: './skripta.component.html',
  styleUrls: ['./skripta.component.css']
})
export class SkriptaComponent implements OnInit {

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
