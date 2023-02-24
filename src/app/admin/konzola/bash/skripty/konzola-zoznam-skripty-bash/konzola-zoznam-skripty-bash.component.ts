import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamSkriptBash} from "../../../../../models/skripta.model";
import {SkriptaBashService} from "../../../../../../Service/Skripta/skriptaBash-service";

@Component({
  selector: 'app-konzola-zoznam-skripty-bash',
  templateUrl: './konzola-zoznam-skripty-bash.component.html',
  styleUrls: ['./konzola-zoznam-skripty-bash.component.css']
})
export class KonzolaZoznamSkriptyBashComponent implements OnInit {

  //Skripty
  @Input()
  skripty: zoznamSkriptBash[] = [];
  @Output()
  upravSkripty: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  vymazSkripty: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router, private skriptaBashService: SkriptaBashService) {
  }

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
    this.skriptaBashService.getSkripta().subscribe(data => {
      this.skripty = data;
      data.sort();
    });
  }
}
