import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamUloh} from "../../models/cvicenie.model";

@Component({
  selector: 'app-cvicenia-zoznam',
  templateUrl: './cvicenia-zoznam.component.html',
  styleUrls: ['./cvicenia-zoznam.component.css']
})
export class CviceniaZoznamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  ulohy: zoznamUloh[] = [];

  @Output()
  upravUlohu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazUlohu: EventEmitter<number> = new EventEmitter<number>();

  uprav(ulohaId?: number): void {
    this.upravUlohu.emit(ulohaId);
  }

  zmaz(ulohaId?: number): void {
    this.vymazUlohu.emit(ulohaId);
  }
}
