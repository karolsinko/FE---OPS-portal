import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamQuizovC} from "../../../../../models/quiz.model";

@Component({
  selector: 'app-konzola-zoznam-quiz-c',
  templateUrl: './konzola-zoznam-quiz-c.component.html',
  styleUrls: ['./konzola-zoznam-quiz-c.component.css']
})
export class KonzolaZoznamQuizCComponent implements OnInit {
  //Quizy
  @Input()
  quiz: zoznamQuizovC[] = [];
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
