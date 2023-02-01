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

  currentStepIndex = 0;
  score = 0;
  userAnswer: string;
  constructor() {
    this.userAnswer = "";
  }

  ngOnInit() {
    this.submitAnswers();
  }

  submitAnswers() {

    let correct = true;
    if (!this.quiz || !this.quiz[this.currentStepIndex]) {
      return;
    }
      if (this.userAnswer.trim() === this.quiz[this.currentStepIndex].solution) {
        this.score++;
        correct = true;
      }else {
        alert(`Wrong answer. Correct answer is "${(this.quiz[this.currentStepIndex].solution)}"`);
        this.score--;
        correct = false;
        return;
      }
      console.log(`solution: ${this.quiz[this.currentStepIndex].solution}`);
      console.log(`userAnswer: ${this.userAnswer.trim()}`);
      console.log(`Your score is: ${this.score}`);
    this.currentStepIndex++;
  }
}
