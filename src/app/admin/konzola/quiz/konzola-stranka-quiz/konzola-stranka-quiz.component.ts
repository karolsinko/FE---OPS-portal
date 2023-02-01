import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {quiz, zoznamQuizov} from "../../../../models/quiz.model";
import {QuizService} from "../../../../../Service/quiz-service";

@Component({
  selector: 'app-konzola-stranka-quiz',
  templateUrl: './konzola-stranka-quiz.component.html',
  styleUrls: ['./konzola-stranka-quiz.component.css']
})
export class KonzolaStrankaQuizComponent implements OnInit {

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  //Admin konzola Quiz
  @Input()
  quiz: zoznamQuizov[] = [];

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
