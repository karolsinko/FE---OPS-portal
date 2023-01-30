import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamSkript} from "../../../../models/skripta.model";

@Component({
  selector: 'app-konzola-zoznam-skripty',
  templateUrl: './konzola-zoznam-skripty.component.html',
  styleUrls: ['./konzola-zoznam-skripty.component.css']
})
export class KonzolaZoznamSkriptyComponent implements OnInit {

  constructor() {
  }

  //Skripty
  @Input()
  skripty: zoznamSkript[] = [];

  @Output()
  upravSkripty: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazSkripty: EventEmitter<number> = new EventEmitter<number>();

  uprav(id?: number): void {
    this.upravSkripty.emit(id);
  }

  zmaz(id?: number): void {
    this.vymazSkripty.emit(id);
  }

  ngOnInit(): void {
  }

}
