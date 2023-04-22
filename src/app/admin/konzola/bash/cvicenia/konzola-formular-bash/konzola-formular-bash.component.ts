import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniBash} from "../../../../../models/cvicenie.model";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-bash',
  templateUrl: './konzola-formular-bash.component.html',
  styleUrls: ['./konzola-formular-bash.component.css']
})
export class KonzolaFormularBashComponent implements OnInit {
  form: UntypedFormGroup;
  @Output()
  pridajBashCvicenie = new EventEmitter<zoznamCviceniBash>();
  @Output()
  upravBashCvicenie = new EventEmitter<zoznamCviceniBash>();

  constructor() {
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(null),
      content: new UntypedFormControl(null),
      input: new UntypedFormControl(null),
      solution: new UntypedFormControl(null)
    });
  }

  //Bash
  @Input()
  set cvicenieBash(data: zoznamCviceniBash | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  public pridaj(): void {
    this.pridajBashCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravBashCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.cvicenieBash = undefined;
    this.form.reset();
  }

  ngOnInit(): void {
  }

  private fillForm(zoznamCviceniBash: zoznamCviceniBash): void {
    this.form.controls['id'].setValue(zoznamCviceniBash.id);
    this.form.controls['content'].setValue(zoznamCviceniBash.content);
    this.form.controls['input'].setValue(zoznamCviceniBash.input);
    this.form.controls['solution'].setValue(zoznamCviceniBash.solution);
  }
}
