import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamQuizovBash} from "../../../models/quiz.model";
import {QuizBashService} from "../../../../Service/Quiz/quizBash-service";

@Component({
  selector: 'app-quiz-bash-stranka',
  templateUrl: './quiz-bash-stranka.component.html',
  styleUrls: ['./quiz-bash-stranka.component.css']
})
export class QuizBashStrankaComponent implements OnInit {

  constructor(private router: Router, private quizBashService: QuizBashService) { }

  quiz: zoznamQuizovBash[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizBashService.getQuizy().subscribe(data => {
      console.log('Prislo: ', data);
      this.quiz = data;
    });
  }

}
