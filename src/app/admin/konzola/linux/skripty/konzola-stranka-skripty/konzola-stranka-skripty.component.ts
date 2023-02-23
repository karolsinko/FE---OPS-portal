import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {skripta, zoznamSkriptLinux} from "../../../../../models/skripta.model";
import {SkriptaLinuxService} from "../../../../../../Service/Skripta/skriptaLinux-service";

@Component({
  selector: 'app-konzola-stranka-skripty',
  templateUrl: './konzola-stranka-skripty.component.html',
  styleUrls: ['./konzola-stranka-skripty.component.css']
})
export class KonzolaStrankaSkriptyComponent implements OnInit {

  constructor(private router: Router, private skriptaService: SkriptaLinuxService) { }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  //Admin konzola
  @Input()
  skripta: zoznamSkriptLinux[] = [];

  skriptNaUpravu?: skripta;

  obnovitSkripta(): void {
    this.skriptaService.getSkripta().subscribe(data => {
      console.log('Prislo: ', data);
      this.skripta = data;
    });
  }

  pridaj(skripta: skripta): void {
    this.skriptaService.createSkript(skripta).subscribe(() => {
      this.obnovitSkripta();
    });
  }

  uprav(skripta: skripta): void {
    if(skripta.id !== undefined){
      this.skriptaService.updateSkript(skripta.id, skripta).subscribe(() =>{
        this.obnovitSkripta();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.skriptaService.getSkriptPodlaId(id).subscribe(data =>{
      this.skriptNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if(confirm('Naozaj chces zmazat?')){
      this.skriptaService.deleteSkript(id).subscribe(() =>{
        this.obnovitSkripta();
      });
    }
  }
}
