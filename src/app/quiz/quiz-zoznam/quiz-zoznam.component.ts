import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizov} from "../../models/quiz.model";
import {QuizService} from "../../../Service/quiz-service";

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

  constructor(quizService: QuizService) {

  }
  userAnswer: string | undefined;

  ngOnInit() {
    this.userAnswer = '';
  }

  submitAnswers() {
    let correct = true;
      for (let i = 0; i < this.quiz.length; i++) {
      let vysledok = this.quiz[i].solution;
      if (!this.userAnswer) {
        console.error(`Element with id 'question_${i + 1}' not found.`);
        return;
      }
      if (this.userAnswer.trim() !== vysledok) {
        alert(`Nesprávna odpoveď. Correct answer is "${(vysledok)}"`);
        this.score--;
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
