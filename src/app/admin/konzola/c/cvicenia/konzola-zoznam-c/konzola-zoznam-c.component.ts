import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniC} from "../../../../../models/cvicenie.model";

@Component({
  selector: 'app-konzola-zoznam-c',
  templateUrl: './konzola-zoznam-c.component.html',
  styleUrls: ['./konzola-zoznam-c.component.css']
})
export class KonzolaZoznamCComponent implements OnInit {

  //C
  @Input()
  cvicenieC: zoznamCviceniC[] = [];
  @Output()
  upravCCvicenie: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  vymazCCvicenie: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  uprav(id?: number): void {
    this.upravCCvicenie.emit(id);
  }

  zmaz(id?: number): void {
    this.vymazCCvicenie.emit(id);
  }

  ngOnInit(): void {
  }
}
