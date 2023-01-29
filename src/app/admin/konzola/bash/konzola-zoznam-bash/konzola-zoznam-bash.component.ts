import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniBash} from "../../../../models/cvicenie.model";

@Component({
  selector: 'app-konzola-zoznam-bash',
  templateUrl: './konzola-zoznam-bash.component.html',
  styleUrls: ['./konzola-zoznam-bash.component.css']
})
export class KonzolaZoznamBashComponent implements OnInit {

  constructor() {
  }
  //BASH
  @Input()
  cvicenieBash: zoznamCviceniBash[] = [];

  @Output()
  upravBashCvicenie: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazBashCvicenie: EventEmitter<number> = new EventEmitter<number>();

  uprav(id?: number): void {
    this.upravBashCvicenie.emit(id);
  }

  zmaz(id?: number): void {
    this.vymazBashCvicenie.emit(id);
  }

  ngOnInit(): void {
  }
}
