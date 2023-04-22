import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamQuizovBash} from "../../../../../models/quiz.model";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-quiz-bash',
  templateUrl: './konzola-formular-quiz-bash.component.html',
  styleUrls: ['./konzola-formular-quiz-bash.component.css']
})
export class KonzolaFormularQuizBashComponent implements OnInit {


  form: UntypedFormGroup;
  @Output()
  pridajQuiz = new EventEmitter<zoznamQuizovBash>();
  @Output()
  upravQuiz = new EventEmitter<zoznamQuizovBash>();

  constructor() {
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(null),
      question: new UntypedFormControl(null),
      solution: new UntypedFormControl(null),
      option1: new UntypedFormControl(null),
      option2: new UntypedFormControl(null),
      option3: new UntypedFormControl(null),
      option4: new UntypedFormControl(null)
    });
  }

//Quiz
  @Input()
  set quiz(data: zoznamQuizovBash | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  public pridaj(): void {
    this.pridajQuiz.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravQuiz.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.quiz = undefined;
    this.form.reset();
  }

  ngOnInit(): void {
  }

  private fillForm(zoznamQuizov: zoznamQuizovBash): void {
    this.form.controls['id'].setValue(zoznamQuizov.id);
    this.form.controls['question'].setValue(zoznamQuizov.question);
    this.form.controls['solution'].setValue(zoznamQuizov.solution);
    this.form.controls['option1'].setValue(zoznamQuizov.option1);
    this.form.controls['option2'].setValue(zoznamQuizov.option2);
    this.form.controls['option3'].setValue(zoznamQuizov.option3);
    this.form.controls['option4'].setValue(zoznamQuizov.option4);
  }
}
