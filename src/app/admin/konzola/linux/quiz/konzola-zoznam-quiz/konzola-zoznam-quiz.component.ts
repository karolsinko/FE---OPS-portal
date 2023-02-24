import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamQuizovLinux} from "../../../../../models/quiz.model";

@Component({
  selector: 'app-konzola-zoznam-quiz',
  templateUrl: './konzola-zoznam-quiz.component.html',
  styleUrls: ['./konzola-zoznam-quiz.component.css']
})
export class KonzolaZoznamQuizComponent implements OnInit {
  //Quizy
  @Input()
  quiz: zoznamQuizovLinux[] = [];
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
