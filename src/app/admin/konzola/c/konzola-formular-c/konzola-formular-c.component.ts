import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniC} from "../../../../models/cvicenie.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-c',
  templateUrl: './konzola-formular-c.component.html',
  styleUrls: ['./konzola-formular-c.component.css']
})
export class KonzolaFormularCComponent implements OnInit {

  //C
  @Input()
  set cvicenieC(data: zoznamCviceniC | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajCCvicenie = new EventEmitter<zoznamCviceniC>();

  @Output()
  upravCCvicenie = new EventEmitter<zoznamCviceniC>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      content: new FormControl(null),
      input: new FormControl(null),
      solution: new FormControl(null),
      language: new FormControl(null)
    });
  }

  private fillForm(zoznamCviceniC: zoznamCviceniC): void {
    this.form.controls['id'].setValue(zoznamCviceniC.id);
    this.form.controls['content'].setValue(zoznamCviceniC.content);
    this.form.controls['input'].setValue(zoznamCviceniC.input);
    this.form.controls['solution'].setValue(zoznamCviceniC.solution);
    this.form.controls['language'].setValue(zoznamCviceniC.language);
  }

  public pridaj(): void {
    this.pridajCCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravCCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.cvicenieC = undefined;
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
