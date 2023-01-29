import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia-formular',
  templateUrl: './cvicenia-formular.component.html',
  styleUrls: ['./cvicenia-formular.component.css']
})
export class CviceniaFormularComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void{

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
