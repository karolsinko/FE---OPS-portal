import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {skripta, zoznamSkriptBash} from "../../../../../models/skripta.model";
import {SkriptaBashService} from "../../../../../../Service/Skripta/skriptaBash-service";

@Component({
  selector: 'app-konzola-stranka-skripty-bash',
  templateUrl: './konzola-stranka-skripty-bash.component.html',
  styleUrls: ['./konzola-stranka-skripty-bash.component.css']
})
export class KonzolaStrankaSkriptyBashComponent implements OnInit {

  //Admin konzola
  @Input()
  skripta: zoznamSkriptBash[] = [];
  skriptNaUpravu?: skripta;

  constructor(private router: Router, private skriptaBashService: SkriptaBashService) {
  }

  ngOnInit(): void {
    this.obnovitSkripta();
  }

  obnovitSkripta(): void {
    this.skriptaBashService.getSkripta().subscribe(data => {
      console.log('Prislo: ', data);
      this.skripta = data;
    });
  }

  pridaj(skripta: skripta): void {
    this.skriptaBashService.createSkript(skripta).subscribe(() => {
      this.obnovitSkripta();
    });
  }

  uprav(skripta: skripta): void {
    if (skripta.id !== undefined) {
      this.skriptaBashService.updateSkript(skripta.id, skripta).subscribe(() => {
        this.obnovitSkripta();
      });
    }
  }

  upravZoZoznamu(id: number): void {
    this.skriptaBashService.getSkriptPodlaId(id).subscribe(data => {
      this.skriptNaUpravu = data;
    });
  }

  zmazZoZoznamu(id: number): void {
    if (confirm('Naozaj chces zmazat?')) {
      this.skriptaBashService.deleteSkript(id).subscribe(() => {
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