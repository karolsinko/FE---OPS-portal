import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cvicenia',
  templateUrl: './cvicenia.component.html',
  styleUrls: ['./cvicenia.component.css']
})
export class CviceniaComponent implements OnInit {

  myScriptElement: HTMLScriptElement;
  //myScriptElement1: HTMLIFrameElement;

  constructor(private router: Router) {
  this.myScriptElement = document.createElement("script");
  this.myScriptElement.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
  document.body.appendChild(this.myScriptElement)
  /*this.myScriptElement1 = document.createElement("iframe");
  this.myScriptElement1.src = "https://repl.it/@zyvxn/DeveloperComEmbeddedRepl?lite=true";
  this.myScriptElement1.width = "2000px";
  this.myScriptElement1.height = "800px";
  document.body.appendChild(this.myScriptElement1);*/
}

  chodSpat(): void {
    this.router.navigate(['']);
  }
  ngOnInit(): void{
  }

}
