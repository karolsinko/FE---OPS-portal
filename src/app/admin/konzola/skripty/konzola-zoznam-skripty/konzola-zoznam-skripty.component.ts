import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamSkript} from "../../../../models/skripta.model";
import {Router} from "@angular/router";
import {SkriptaService} from "../../../../../Service/skripta-service";

@Component({
  selector: 'app-konzola-zoznam-skripty',
  templateUrl: './konzola-zoznam-skripty.component.html',
  styleUrls: ['./konzola-zoznam-skripty.component.css']
})
export class KonzolaZoznamSkriptyComponent implements OnInit {

  constructor(private router: Router, private skriptaService: SkriptaService) {
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
    this.obnovitSkripta();
  }

  obnovitSkripta(): void {
    this.skriptaService.getSkripta().subscribe(data => {
      this.skripty = data;
      data.sort();
    });
  }
}
