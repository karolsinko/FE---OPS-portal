import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface Question {
  text: string;
  options: Option[];
}

interface Option {
  text: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-quiz-formular',
  templateUrl: './quiz-formular.component.html',
  styleUrls: ['./quiz-formular.component.css']
})
export class QuizFormularComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

ngOnInit() {

}
}

