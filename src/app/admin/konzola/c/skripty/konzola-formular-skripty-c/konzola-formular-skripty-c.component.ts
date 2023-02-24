import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamSkriptC, zoznamSkriptLinux} from "../../../../../models/skripta.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-skripty-c',
  templateUrl: './konzola-formular-skripty-c.component.html',
  styleUrls: ['./konzola-formular-skripty-c.component.css']
})
export class KonzolaFormularSkriptyCComponent implements OnInit {

//Skripty
  @Input()
  set skripty(data: zoznamSkriptC | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajSkripty = new EventEmitter<zoznamSkriptC>();

  @Output()
  upravSkripty = new EventEmitter<zoznamSkriptC>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      commands: new FormControl(null),
      content: new FormControl(null),
      content1: new FormControl(null),
      explain: new FormControl(null),
      scripts: new FormControl(null)
    });
  }

  private fillForm(zoznamSkript: zoznamSkriptC): void {
    this.form.controls['id'].setValue(zoznamSkript.id);
    this.form.controls['commands'].setValue(zoznamSkript.commands);
    this.form.controls['content'].setValue(zoznamSkript.content);
    this.form.controls['content1'].setValue(zoznamSkript.content1);
    this.form.controls['explain'].setValue(zoznamSkript.explain);
  }

  public pridaj(): void {
    this.pridajSkripty.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravSkripty.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.skripty = undefined;
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
