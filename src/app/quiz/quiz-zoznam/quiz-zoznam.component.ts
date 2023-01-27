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

  question?: string;
  options1?: string;
  options2?: string;
  options3?: string;
  solution = '';
  selectedOption = '';
  showResult = false;
  result = '';

  constructor(private http: HttpClient) {
    this.getNextQuestion();
  }

  getNextQuestion() {
    this.http.get<zoznamQuizov>('/api/quiz').subscribe(data => {
      this.question = data.question;
      this.options1 = data.option1;
      this.options2 = data.option2;
      this.options3 = data.option3;
      this.solution = data.solution;
    });
  }

  checkAnswer() {
    this.showResult = true;
    if (this.selectedOption === this.solution) {
      this.result = 'Správná odpověď!';
    } else {
      this.result = 'Špatná odpověď, správná odpověď je: ' + this.solution;
    }
  }

  ngOnInit(): void {
  }

}
