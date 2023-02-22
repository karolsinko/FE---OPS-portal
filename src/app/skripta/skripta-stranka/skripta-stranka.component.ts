import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {zoznamSkript} from "../../models/skripta.model";
import {SkriptaLinuxService} from "../../../Service/Skripta/skriptaLinux-service";

@Component({
  selector: 'app-skripta-stranka',
  templateUrl: './skripta-stranka.component.html',
  styleUrls: ['./skripta-stranka.component.css']
})
export class SkriptaStrankaComponent implements OnInit {
  pdf: HTMLIFrameElement;

  constructor(private router: Router,private skriptaService: SkriptaLinuxService) {
    this.pdf = document.createElement("iframe");
    this.pdf.src = "https://www.ramstery.sk/user/documents/upload/OPSY1.pdf";
    this.pdf.height = "auto";
    this.pdf.width = "auto";
  }

  skripta: zoznamSkript[] = [];

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
