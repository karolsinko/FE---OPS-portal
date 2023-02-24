import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SkriptaLinuxService} from "../../../../Service/Skripta/skriptaLinux-service";
import {zoznamSkriptBash} from "../../../models/skripta.model";

@Component({
  selector: 'app-skripta-stranka-bash',
  templateUrl: './skripta-stranka-bash.component.html',
  styleUrls: ['./skripta-stranka-bash.component.css']
})
export class SkriptaStrankaBashComponent implements OnInit {

  pdf: HTMLIFrameElement;

  constructor(private router: Router,private skriptaService: SkriptaLinuxService) {
    this.pdf = document.createElement("iframe");
    this.pdf.src = "https://www.ramstery.sk/user/documents/upload/OPSY1.pdf";
    this.pdf.height = "auto";
    this.pdf.width = "auto";
  }

  skripta: zoznamSkriptBash[] = [];

  chodSpat(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.obnovitUlohy();
  }

  obnovitUlohy(): void {
    this.skriptaService.getSkripta().subscribe(data => {
      console.log('Prislo: ', data);
      this.skripta = data;
    })
  }

  pridajPDF(): void {
    document.getElementById("here")?.appendChild(this.pdf);
  }
}
