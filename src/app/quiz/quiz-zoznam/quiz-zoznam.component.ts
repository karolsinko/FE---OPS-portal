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

  unCheckRadioButtons() {
    const options = document.getElementsByName("userAnswer");
    for (let i = 0;i < options.length; i++) {
      (options[i] as HTMLInputElement).checked = false;
    }
  }

  submitAnswers() {
    let correct = true;
    if (!this.quiz || !this.quiz[this.currentStepIndex]) {
      return;
    }
      if (this.userAnswer.trim() === this.quiz[this.currentStepIndex].solution) {
        this.score++;
        correct = true;
        this.unCheckRadioButtons();
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
