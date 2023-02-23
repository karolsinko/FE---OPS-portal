import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {zoznamQuizovC, zoznamQuizovLinux} from "../../../models/quiz.model";
import {QuizCService} from "../../../../Service/Quiz/quizC-service";

@Component({
  selector: 'app-quiz-c-stranka',
  templateUrl: './quiz-c-stranka.component.html',
  styleUrls: ['./quiz-c-stranka.component.css']
})
export class QuizCStrankaComponent implements OnInit {

  constructor(private router: Router, private quizCService: QuizCService) { }

  quiz: zoznamQuizovC[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizCService.getQuizy().subscribe(data => {
      console.log('Prislo: ', data);
      this.quiz = data;
    });
  }

}
