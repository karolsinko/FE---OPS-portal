import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizovLinux} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizLinuxService} from "../../../../Service/Quiz/quizLinux-service";

@Component({
  selector: 'app-quiz-linux',
  templateUrl: './quiz-linux.component.html',
  styleUrls: ['./quiz-linux.component.css']
})

export class QuizLinuxComponent implements OnInit {

  @Input()
  quiz: zoznamQuizovLinux[] = [];

  currentStepIndex = 0;
  score = 0;
  pocetPokusov = 0;
  pocetChyb = 0;
  userAnswer: string;
  koniec = 0;
  level = 0;
  constructor(private router: Router, private quizService: QuizLinuxService) {
    this.userAnswer = "";
  }

  ngOnInit() {
    this.submitAnswers();
    this.obnovitQuizy();
  }

  obnovitQuizy(): void {
    this.quizService.getQuizy().subscribe(data => {
      this.quiz = data;
      this.koniec = data.length;
      const dlzkaLevela = this.chunkArray(this.quiz, 5);
      console.log(dlzkaLevela);
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
    } else {
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
        this.level++;
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

  chunkArray<T>(arr: T[], chunkSize: number): T[][] {
    const chunks = [];
    let i = 0;
    while (i < arr.length) {
      chunks.push(arr.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return chunks;
  }

  resetQuiz() {
    window.location.reload();
  }
}
