import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia-formular',
  templateUrl: './cvicenia-formular.component.html',
  styleUrls: ['./cvicenia-formular.component.css']
})
export class CviceniaFormularComponent implements OnInit {

  compilerC: HTMLIFrameElement;
  compilerBash: HTMLIFrameElement;
  compilerLinux: HTMLIFrameElement;

  constructor(private router: Router) {
    this.compilerC = document.createElement("iframe");
    this.compilerC.src = "https://paiza.io/projects/e/y4_khhZvaf4VAfBGlPCuIQ?theme=twilight";
    this.compilerC.height = "500";
    this.compilerC.width = "auto";

    this.compilerBash = document.createElement("iframe");
    this.compilerBash.src = "https://paiza.io/projects/e/lGDP8OLLGPWOYsHkXjjwmg?theme=twilight";
    this.compilerBash.height = "500";
    this.compilerBash.width = "auto";

    this.compilerLinux = document.createElement("iframe");
    this.compilerLinux.src = "https://bellard.org/jslinux/vm.html?cpu=riscv64&url=buildroot-riscv64.cfg&mem=256";
    this.compilerLinux.height = "700";
    this.compilerLinux.width = "auto";
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

  pridajCompilerLinux(): void {
    document.getElementById("here")?.appendChild(this.compilerLinux);
  }

  odstranCompilerLinux(): void {
    document.getElementById("here")?.removeChild(this.compilerLinux);
  }
  ngOnInit(): void{

  }
}
