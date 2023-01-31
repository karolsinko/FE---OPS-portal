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
  score = 0

  constructor() {

  }

  ngOnInit() {
  }

  submitAnswers() {
    let correct = true;
    for (let i = 1; i < this.quiz.length; i++) {
      let vysledok = this.quiz[i].solution;
      const userAnswer = (<HTMLInputElement>document.getElementById("question_" + i)).value;
      if (!userAnswer) {
        console.error(`Element with id 'question_${i}' not found.`);
        return;
      }
      if (userAnswer.trim() !== vysledok) {
        alert(`Question ${i + 1} is incorrect. Correct answer is "${(vysledok)}"`);
        correct = false;
        break;
      }
      console.log(`answer: ${this.quiz[i].option2}`);
      console.log(`option2: ${this.quiz[i].solution}`);
    }
    if (correct) {
      if (this.currentStepIndex < this.quiz.length-1) {
        this.currentStepIndex++;
      }
      this.score++;
    }
    console.log(`Your score is: ${this.score}`);

  }

}
