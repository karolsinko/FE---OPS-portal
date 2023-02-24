import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {SkriptaLinuxService} from "../../../../../../Service/Skripta/skriptaLinux-service";
import {zoznamSkriptC, zoznamSkriptLinux} from "../../../../../models/skripta.model";
import {SkriptaCService} from "../../../../../../Service/Skripta/skriptaC-service";

@Component({
  selector: 'app-konzola-zoznam-skripty-c',
  templateUrl: './konzola-zoznam-skripty-c.component.html',
  styleUrls: ['./konzola-zoznam-skripty-c.component.css']
})
export class KonzolaZoznamSkriptyCComponent implements OnInit {
  constructor(private router: Router, private skriptaService: SkriptaCService) {
  }

  //Skripty
  @Input()
  skripty: zoznamSkriptC[] = [];

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
