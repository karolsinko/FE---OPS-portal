import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OsobaFormularComponent } from './osoba/osoba-formular/osoba-formular.component';
import {OsobaStrankaComponent } from './osoba/osoba-stranka/osoba-stranka.component';
import {VakcinaFormularComponent} from "./vakcina/vakcina-formular/vakcina-formular.component";
import {VakcinaStrankaComponent} from "./vakcina/vakcina-stranka/vakcina-stranka.component";
import {VakcinaZoznamComponent} from "./vakcina/vakcina-zoznam/vakcina-zoznam.component";
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {OsobaZoznamComponent} from "./osoba/osoba-zoznam/osoba-zoznam.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { OckovanostFormularComponent } from './ockovanost/ockovanost-formular/ockovanost-formular.component';
import { OckovanostStrankaComponent } from './ockovanost/ockovanost-stranka/ockovanost-stranka.component';
import { OckovanostZoznamComponent } from './ockovanost/ockovanost-zoznam/ockovanost-zoznam.component';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { QuizComponent } from './quiz/quiz.component';
import { SkriptaComponent } from './skripta/skripta.component';
import { CviceniaComponent } from './cvicenia/cvicenia.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaStrankaComponent,
    OsobaFormularComponent,
    OsobaZoznamComponent,
    VakcinaFormularComponent,
    VakcinaStrankaComponent,
    VakcinaZoznamComponent,
    MenuComponent,
    OckovanostFormularComponent,
    OckovanostStrankaComponent,
    OckovanostZoznamComponent,
    QuizComponent,
    SkriptaComponent,
    CviceniaComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
