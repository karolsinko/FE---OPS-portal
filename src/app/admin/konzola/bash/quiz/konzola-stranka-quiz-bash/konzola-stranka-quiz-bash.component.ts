import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {QuizCService} from "../../../../../../Service/Quiz/quizC-service";
import {quiz, zoznamQuizovBash} from "../../../../../models/quiz.model";

@Component({
  selector: 'app-konzola-stranka-quiz-bash',
  templateUrl: './konzola-stranka-quiz-bash.component.html',
  styleUrls: ['./konzola-stranka-quiz-bash.component.css']
})
export class KonzolaStrankaQuizBashComponent implements OnInit {

  //Admin konzola Quiz
  @Input()
  quiz: zoznamQuizovBash[] = [];
  quizNaUpravu?: quiz;

  constructor(private router: Router, private quizService: QuizCService) {
  }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  obnovitSkripta(): void {
    this.quizService.getQuizy().subscribe(data => {
      console.log('Prislo: ', data);
      this.quiz = data;
    });
  }

  pridaj(quiz: quiz): void {
    this.quizService.createQuiz(quiz).subscribe(() => {
      this.obnovitSkripta();
    });
  }

  uprav(quiz: quiz): void {
    if (quiz.id !== undefined) {
      this.quizService.updateQuiz(quiz.id, quiz).subscribe(() => {
        this.obnovitSkripta();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.quizService.getQuizPodlaId(id).subscribe(data => {
      this.quizNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if (confirm('Naozaj chces zmazat?')) {
      this.quizService.deleteQuiz(id).subscribe(() => {
        this.obnovitSkripta();
      });
    }
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }


  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }
}
