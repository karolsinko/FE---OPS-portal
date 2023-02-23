import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniBash} from "../../../../../models/cvicenie.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular-bash',
  templateUrl: './konzola-formular-bash.component.html',
  styleUrls: ['./konzola-formular-bash.component.css']
})
export class KonzolaFormularBashComponent implements OnInit {
  //Bash
  @Input()
  set cvicenieBash(data: zoznamCviceniBash | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajBashCvicenie = new EventEmitter<zoznamCviceniBash>();

  @Output()
  upravBashCvicenie = new EventEmitter<zoznamCviceniBash>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      content: new FormControl(null),
      input: new FormControl(null),
      solution: new FormControl(null)
    });
  }

  private fillForm(zoznamCviceniBash: zoznamCviceniBash): void {
    this.form.controls['id'].setValue(zoznamCviceniBash.id);
    this.form.controls['content'].setValue(zoznamCviceniBash.content);
    this.form.controls['input'].setValue(zoznamCviceniBash.input);
    this.form.controls['solution'].setValue(zoznamCviceniBash.solution);
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
}
