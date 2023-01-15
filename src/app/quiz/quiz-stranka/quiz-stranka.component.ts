import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-stranka',
  templateUrl: './quiz-stranka.component.html',
  styleUrls: ['./quiz-stranka.component.css']
})
export class QuizStrankaComponent implements OnInit {

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }
}
