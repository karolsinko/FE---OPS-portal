import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-c-formular',
  templateUrl: './c-formular.component.html',
  styleUrls: ['./c-formular.component.css']
})
export class CFormularComponent implements OnInit {

  compilerC: HTMLIFrameElement;

  constructor(private router: Router) {
    this.compilerC = document.createElement("iframe");
    this.compilerC.src = "https://paiza.io/projects/e/y4_khhZvaf4VAfBGlPCuIQ?theme=twilight";
    this.compilerC.height = "500";
    this.compilerC.width = "auto";
  }

  pridajCompilerC(): void {
    document.getElementById("here")?.appendChild(this.compilerC);
  }

  odstranCompilerC(): void {
    document.getElementById("here")?.removeChild(this.compilerC);
  }

  ngOnInit(): void {

  }
}
