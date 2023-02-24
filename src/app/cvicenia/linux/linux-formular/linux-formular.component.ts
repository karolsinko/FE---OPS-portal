import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-linux-formular',
  templateUrl: './linux-formular.component.html',
  styleUrls: ['./linux-formular.component.css']
})
export class LinuxFormularComponent implements OnInit {

  compilerLinux: HTMLIFrameElement;

  constructor(private router: Router) {
    this.compilerLinux = document.createElement("iframe");
    this.compilerLinux.src = "https://bellard.org/jslinux/vm.html?cpu=riscv64&url=buildroot-riscv64.cfg&mem=256";
    this.compilerLinux.height = "700";
    this.compilerLinux.width = "auto";
  }

  pridajCompilerLinux(): void {
    document.getElementById("here")?.appendChild(this.compilerLinux);
  }

  odstranCompilerLinux(): void {
    document.getElementById("here")?.removeChild(this.compilerLinux);
  }

  ngOnInit(): void {

  }
}
