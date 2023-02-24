import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SkriptaLinuxService} from "../../../../../../Service/Skripta/skriptaLinux-service";
import {skripta, zoznamSkriptC, zoznamSkriptLinux} from "../../../../../models/skripta.model";
import {SkriptaCService} from "../../../../../../Service/Skripta/skriptaC-service";

@Component({
  selector: 'app-konzola-stranka-skripty-c',
  templateUrl: './konzola-stranka-skripty-c.component.html',
  styleUrls: ['./konzola-stranka-skripty-c.component.css']
})
export class KonzolaStrankaSkriptyCComponent implements OnInit {

  constructor(private router: Router, private skriptaService: SkriptaCService) { }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  //Admin konzola
  @Input()
  skripta: zoznamSkriptC[] = [];

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
  chodSpat(): void {
    this.router.navigate(['']);
  }


  logout() {
    // Vymažte uložený stav prihlásenia
    localStorage.removeItem('isLoggedIn');

    // Navigate to login page
    this.router.navigate(['/admin']);
  }
}
