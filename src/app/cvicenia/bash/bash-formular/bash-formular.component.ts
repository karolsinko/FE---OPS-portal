import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bash-formular',
  templateUrl: './bash-formular.component.html',
  styleUrls: ['./bash-formular.component.css']
})
export class BashFormularComponent implements OnInit {

  compilerBash: HTMLIFrameElement;

  constructor(private router: Router) {
    this.compilerBash = document.createElement("iframe");
    this.compilerBash.src = "https://paiza.io/projects/e/lGDP8OLLGPWOYsHkXjjwmg?theme=twilight";
    this.compilerBash.height = "500";
    this.compilerBash.width = "auto";
  }

  pridajCompilerBash(): void {
    document.getElementById("here")?.appendChild(this.compilerBash);
  }

  odstranCompilerBash(): void{
    document.getElementById("here")?.removeChild(this.compilerBash);
  }

  ngOnInit(): void{

  }
}
