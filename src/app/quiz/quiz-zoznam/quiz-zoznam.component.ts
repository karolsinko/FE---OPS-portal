import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizov} from "../../models/quiz.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-quiz-zoznam',
  templateUrl: './quiz-zoznam.component.html',
  styleUrls: ['./quiz-zoznam.component.css']
})

export class QuizZoznamComponent implements OnInit {

  @Input()
  quiz: zoznamQuizov[] = [];

  currentStepIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  submitAnswers() {
    let score = 0;
    for (let i = 0; i < this.quiz.length; i++) {
      const answer = this.quiz[i].option2;
      const option2 = this.quiz[i].option2;
      if (answer === option2) {
        score++;
        this.currentStepIndex++;
      } else {
        alert(`Question ${i + 1} is incorrect. Correct answer is "${option2}"`);
        return;
      }
    }
    console.log(`Your score is: ${score}`);
  }
}
