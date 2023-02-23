import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {quiz, zoznamQuizovC, zoznamQuizovLinux} from "../../../../../models/quiz.model";
import {QuizLinuxService} from "../../../../../../Service/Quiz/quizLinux-service";
import {QuizCService} from "../../../../../../Service/Quiz/quizC-service";

@Component({
  selector: 'app-konzola-stranka-quiz-c',
  templateUrl: './konzola-stranka-quiz-c.component.html',
  styleUrls: ['./konzola-stranka-quiz-c.component.css']
})
export class KonzolaStrankaQuizCComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizCService) { }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  //Admin konzola Quiz
  @Input()
  quiz: zoznamQuizovC[] = [];

  quizNaUpravu?: quiz;

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
    if(quiz.id !== undefined){
      this.quizService.updateQuiz(quiz.id, quiz).subscribe(() =>{
        this.obnovitSkripta();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.quizService.getQuizPodlaId(id).subscribe(data =>{
      this.quizNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.quizService.deleteQuiz(id).subscribe(() =>{
        this.obnovitSkripta();
      });
    }
  }
}
