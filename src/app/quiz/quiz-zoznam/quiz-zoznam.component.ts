import {Component, Input, OnInit} from '@angular/core';
import {zoznamQuizov} from "../../models/quiz.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quiz-zoznam',
  templateUrl: './quiz-zoznam.component.html',
  styleUrls: ['./quiz-zoznam.component.css']
})

export class QuizZoznamComponent implements OnInit {

  @Input()
  quiz: zoznamQuizov[] = [];

  @Input()
  set quizov(data: zoznamQuizov | undefined){
    if (data) {
      this.fillForm(data);
    }
  }

  currentStepIndex = 0;
  score = 0

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      option1: new FormControl(null),
      option2: new FormControl(null),
      option3: new FormControl(null),
      option4: new FormControl(null),
      question: new FormControl(null),
      solution: new FormControl(null)
    });
  }
  form: FormGroup;

  private fillForm(quizov: zoznamQuizov): void {
    this.form.controls['id'].setValue(quizov.id);
    this.form.controls['option1'].setValue(quizov.option1);
    this.form.controls['option2'].setValue(quizov.option2);
    this.form.controls['option3'].setValue(quizov.option3);
    this.form.controls['option4'].setValue(quizov.option4);
    this.form.controls['question'].setValue(quizov.question);
    this.form.controls['solution'].setValue(quizov.solution);
  }
  ngOnInit() {
  }

  submitAnswers() {
    for (let i = 0; i < this.quiz.length; i++) {
      const answer = this.quiz[i].option2;
      const option2 = this.quiz[i].solution;
        if (answer === option2) {
        }
            else {
              alert(`Question ${i + 1} is incorrect. Correct answer is "${option2}"`);
              this.score = 0;
            }
    }
    if (this.currentStepIndex < this.quiz.length-1) {
      this.currentStepIndex++;
    }
    this.score++;
    console.log(`Your score is: ${this.score}`);
    return 0;
  }
}
