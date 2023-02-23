import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniLinux} from "../../../../../models/cvicenie.model";

@Component({
  selector: 'app-konzola-zoznam',
  templateUrl: './konzola-zoznam.component.html',
  styleUrls: ['./konzola-zoznam.component.css']
})
export class KonzolaZoznamComponent implements OnInit {

  constructor() {
  }

  //LINUX
  @Input()
  cvicenieLinux: zoznamCviceniLinux[] = [];

  @Output()
  upravLinuxCvicenie: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  vymazLinuxCvicenie: EventEmitter<number> = new EventEmitter<number>();

  uprav(id?: number): void {
    this.upravLinuxCvicenie.emit(id);
  }

  zmaz(id?: number): void {
    this.vymazLinuxCvicenie.emit(id);
  }

  ngOnInit(): void {
  }

}
