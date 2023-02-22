import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../Service/quiz-service";
import {zoznamQuizov} from "../../models/quiz.model";

@Component({
  selector: 'app-quiz-stranka',
  templateUrl: './quiz-stranka.component.html',
  styleUrls: ['./quiz-stranka.component.css']
})
export class QuizStrankaComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizService) { }

  quiz: zoznamQuizov[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizService.getQuizy().subscribe(data => {
      console.log('Prislo: ', data);
      this.quiz = data;
    });
  }
}
