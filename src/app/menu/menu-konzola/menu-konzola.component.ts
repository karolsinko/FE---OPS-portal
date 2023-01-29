import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-konzola',
  templateUrl: './menu-konzola.component.html',
  styleUrls: ['./menu-konzola.component.css']
})
export class MenuKonzolaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  PrikladyC(): void{
    this.router.navigate(['/cvicenia/c']);
  }

  PrikladyLinux(): void{
    this.router.navigate(['/cvicenia/linux']);
  }

  PrikladyBash(): void{
    this.router.navigate(['/cvicenia/bash']);
  }
}
