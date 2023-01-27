import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizov} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz-zoznam',
  templateUrl: './quiz-zoznam.component.html',
  styleUrls: ['./quiz-zoznam.component.css']
})

export class QuizZoznamComponent implements OnInit {

  @Input()
  quiz: zoznamQuizov[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
