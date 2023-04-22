import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniC} from "../../../../../models/cvicenie.model";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-c',
  templateUrl: './konzola-formular-c.component.html',
  styleUrls: ['./konzola-formular-c.component.css']
})
export class KonzolaFormularCComponent implements OnInit {

  form: UntypedFormGroup;
  @Output()
  pridajCCvicenie = new EventEmitter<zoznamCviceniC>();
  @Output()
  upravCCvicenie = new EventEmitter<zoznamCviceniC>();

  constructor() {
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(null),
      content: new UntypedFormControl(null),
      input: new UntypedFormControl(null),
      solution: new UntypedFormControl(null)
    });
  }

  //C
  @Input()
  set cvicenieC(data: zoznamCviceniC | undefined) {
    if (data) {
      this.fillForm(data);
    }
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

  private fillForm(zoznamCviceniC: zoznamCviceniC): void {
    this.form.controls['id'].setValue(zoznamCviceniC.id);
    this.form.controls['content'].setValue(zoznamCviceniC.content);
    this.form.controls['input'].setValue(zoznamCviceniC.input);
    this.form.controls['solution'].setValue(zoznamCviceniC.solution);
  }

}
