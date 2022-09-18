import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia',
  templateUrl: './cvicenia.component.html',
  styleUrls: ['./cvicenia.component.css']
})
export class CviceniaComponent implements OnInit {

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
