import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamQuizovBash} from "../../../../../models/quiz.model";

@Component({
  selector: 'app-konzola-zoznam-quiz-bash',
  templateUrl: './konzola-zoznam-quiz-bash.component.html',
  styleUrls: ['./konzola-zoznam-quiz-bash.component.css']
})
export class KonzolaZoznamQuizBashComponent implements OnInit {

  //Quizy
  @Input()
  quiz: zoznamQuizovBash[] = [];
  @Output()
  upravQuizy: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  vymazQuizy: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  uprav(id?: number): void {
    this.upravQuizy.emit(id);
  }

  zmaz(id?: number): void {
    this.vymazQuizy.emit(id);
  }

  ngOnInit(): void {
  }
}
