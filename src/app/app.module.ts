import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { QuizComponent } from './quiz/quiz.component';
import { SkriptaComponent } from './skripta/skripta.component';
import { CviceniaZoznamComponent } from './cvicenia/cvicenia-zoznam/cvicenia-zoznam.component';
import { CviceniaStrankaComponent } from './cvicenia/cvicenia-stranka/cvicenia-stranka.component';
import { CviceniaFormularComponent } from './cvicenia/cvicenia-formular/cvicenia-formular.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuizComponent,
    SkriptaComponent,
    CviceniaZoznamComponent,
    CviceniaStrankaComponent,
    CviceniaFormularComponent,

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
