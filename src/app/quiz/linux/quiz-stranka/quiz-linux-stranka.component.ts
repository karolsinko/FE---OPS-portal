import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizLinuxService} from "../../../../Service/Quiz/quizLinux-service";
import {zoznamQuizovLinux} from "../../../models/quiz.model";

@Component({
  selector: 'app-quiz-linux-stranka',
  templateUrl: './quiz-linux-stranka.component.html',
  styleUrls: ['./quiz-linux-stranka.component.css']
})
export class QuizLinuxStrankaComponent implements OnInit {

  quiz: zoznamQuizovLinux[] = [];

  constructor(private router: Router, private quizLinuxService: QuizLinuxService) {
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizLinuxService.getQuizy().subscribe(data => {
      console.log('Prislo: ', data);
      this.quiz = data;
    });
  }
}
