import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {zoznamSkriptLinux} from "../../../../../models/skripta.model";

@Component({
  selector: 'app-konzola-formular-skripty',
  templateUrl: './konzola-formular-skripty.component.html',
  styleUrls: ['./konzola-formular-skripty.component.css']
})
export class KonzolaFormularSkriptyComponent implements OnInit {
  form: UntypedFormGroup;
  @Output()
  pridajSkripty = new EventEmitter<zoznamSkriptLinux>();
  @Output()
  upravSkripty = new EventEmitter<zoznamSkriptLinux>();

  constructor() {
    this.form = new UntypedFormGroup({
      id: new UntypedFormControl(null),
      commands: new UntypedFormControl(null),
      content: new UntypedFormControl(null),
      content1: new UntypedFormControl(null),
      explain: new UntypedFormControl(null)
    });
  }

//Skripty
  @Input()
  set skripty(data: zoznamSkriptLinux | undefined) {
    if (data) {
      this.fillForm(data);
    }
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

  private fillForm(zoznamSkript: zoznamSkriptLinux): void {
    this.form.controls['id'].setValue(zoznamSkript.id);
    this.form.controls['commands'].setValue(zoznamSkript.commands);
    this.form.controls['content'].setValue(zoznamSkript.content);
    this.form.controls['content1'].setValue(zoznamSkript.content1);
    this.form.controls['explain'].setValue(zoznamSkript.explain);
  }
}
