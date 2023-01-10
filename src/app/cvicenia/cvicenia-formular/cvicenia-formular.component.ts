import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia-formular',
  templateUrl: './cvicenia-formular.component.html',
  styleUrls: ['./cvicenia-formular.component.css']
})
export class CviceniaFormularComponent implements OnInit {

  /* myScriptElement: HTMLScriptElement;*/
  compilerC: HTMLIFrameElement;
  compilerBash: HTMLIFrameElement;

  constructor(private router: Router) {
    this.compilerC = document.createElement("iframe");
    this.compilerC.src = "https://paiza.io/projects/e/y4_khhZvaf4VAfBGlPCuIQ?theme=twilight";
    this.compilerC.height = "1000px";
    this.compilerC.width = "1000px";

    this.compilerBash = document.createElement("iframe");
    this.compilerBash.src = "https://paiza.io/projects/e/lGDP8OLLGPWOYsHkXjjwmg?theme=twilight";
    this.compilerBash.height = "1000px";
    this.compilerBash.width = "1000px";
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridajCompilerC(): void {
    document.getElementById("here")?.appendChild(this.compilerC);
  }

  pridajCompilerBash(): void {
    document.getElementById("here")?.appendChild(this.compilerBash);
  }

  odstranCompilerC(): void {
    document.getElementById("here")?.removeChild(this.compilerC);
  }

  odstranCompilerBash(): void{
    document.getElementById("here")?.removeChild(this.compilerBash);
  }

  ngOnInit(): void{

  }


}
