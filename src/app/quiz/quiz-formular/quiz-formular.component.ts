import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quiz-formular',
  templateUrl: './quiz-formular.component.html',
  styleUrls: ['./quiz-formular.component.css']
})
export class QuizFormularComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

}

