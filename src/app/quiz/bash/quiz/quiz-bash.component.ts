import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizovBash} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizBashService} from "../../../../Service/Quiz/quizBash-service";

@Component({
  selector: 'app-quiz-bash',
  templateUrl: './quiz-bash.component.html',
  styleUrls: ['./quiz-bash.component.css']
})
export class QuizBashComponent implements OnInit {

  @Input()
  quiz: zoznamQuizovBash[] = [];

  currentStepIndex = 0;
  score = 0;
  pocetPokusov = 0;
  pocetChyb = 0;
  userAnswer: string;
  koniec = 0;
  constructor(private router: Router, private quizBashService: QuizBashService) {
    this.userAnswer = "";
  }

  ngOnInit() {
    this.submitAnswers();
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizBashService.getQuizy().subscribe(data => {
      this.quiz = data;
      this.koniec = data.length;
    });
  }

  submitAnswers() {
    let correct = true;
    if (!this.quiz || !this.quiz[this.currentStepIndex]) {
      return;
    }
    if (this.userAnswer.trim() === this.quiz[this.currentStepIndex].solution) {
      this.score++;
      this.pocetPokusov++;
      correct = true;
    }else {
      alert(`Zlá odpoveď, správna odpoveď je: "${(this.quiz[this.currentStepIndex].solution)}"`);
      this.score--;
      this.pocetPokusov++;
      this.pocetChyb++;
      correct = false;
      return;
    }
    console.log(`solution: ${this.quiz[this.currentStepIndex].solution}`);
    console.log(`userAnswer: ${this.userAnswer.trim()}`);
    console.log(`Your score is: ${this.score}`);
    this.currentStepIndex++;
    if (this.currentStepIndex === this.quiz.length) {
      const scoreModal = document.getElementById('score-modal');
      if (scoreModal) {
        scoreModal.style.display = "flex";
      }
    }
  }
  closeScoreModal() {
    const scoreModal = document.getElementById('score-modal');
    if (scoreModal) {
      scoreModal.style.display = "none";
      this.resetQuiz();
    }
  }

  resetQuiz() {
    window.location.reload();
  }
}