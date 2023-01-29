import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {zoznamCviceniLinux} from "../../../models/cvicenie.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-konzola-formular',
  templateUrl: './konzola-formular.component.html',
  styleUrls: ['./konzola-formular.component.css']
})
export class KonzolaFormularComponent implements OnInit {

  @Input()
  set cvicenieLinux(data: zoznamCviceniLinux | undefined){
    if (data) {
      this.fillForm(data);
    }
  }
  form: FormGroup;

  @Output()
  pridajLinuxCvicenie = new EventEmitter<zoznamCviceniLinux>();

  @Output()
  upravLinuxCvicenie = new EventEmitter<zoznamCviceniLinux>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      content: new FormControl(null),
      input: new FormControl(null),
      solution: new FormControl(null),
      language: new FormControl(null)
    });
  }

  private fillForm(zoznamCviceniLinux: zoznamCviceniLinux): void {
    this.form.controls['id'].setValue(zoznamCviceniLinux.id);
    this.form.controls['content'].setValue(zoznamCviceniLinux.content);
    this.form.controls['input'].setValue(zoznamCviceniLinux.input);
    this.form.controls['solution'].setValue(zoznamCviceniLinux.solution);
    this.form.controls['language'].setValue(zoznamCviceniLinux.language);
  }

  public pridaj(): void {
    this.pridajLinuxCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravLinuxCvicenie.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.cvicenieLinux = undefined;
    this.form.reset();
  }
  ngOnInit(): void {
  }
}
