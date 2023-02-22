import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizLinuxService} from "../../../../Service/Quiz/quizLinux-service";
import {zoznamQuizov} from "../../../models/quiz.model";

@Component({
  selector: 'app-quiz-stranka',
  templateUrl: './quiz-stranka.component.html',
  styleUrls: ['./quiz-stranka.component.css']
})
export class QuizStrankaComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizLinuxService) { }

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
