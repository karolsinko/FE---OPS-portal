import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq-stranka',
  templateUrl: './faq-stranka.component.html',
  styleUrls: ['./faq-stranka.component.css']
})
export class FAQStrankaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }
}
