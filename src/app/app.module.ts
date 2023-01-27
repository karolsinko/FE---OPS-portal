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
import { CviceniaZoznamComponent } from './cvicenia/cvicenia-zoznam/cvicenia-zoznam.component';
import { CviceniaStrankaComponent } from './cvicenia/cvicenia-stranka/cvicenia-stranka.component';
import { CviceniaFormularComponent } from './cvicenia/cvicenia-formular/cvicenia-formular.component';
import { SkriptaFormularComponent } from './skripta/skripta-formular/skripta-formular.component';
import { SkriptaStrankaComponent } from './skripta/skripta-stranka/skripta-stranka.component';
import { SkriptaZoznamComponent } from './skripta/skripta-zoznam/skripta-zoznam.component';
import { QuizFormularComponent } from './quiz/quiz-formular/quiz-formular.component';
import { QuizStrankaComponent } from './quiz/quiz-stranka/quiz-stranka.component';
import { QuizZoznamComponent } from './quiz/quiz-zoznam/quiz-zoznam.component';
import { FAQStrankaComponent } from './FAQ/faq-stranka/faq-stranka.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkriptaZoznamComponent,
    SkriptaStrankaComponent,
    SkriptaFormularComponent,
    CviceniaZoznamComponent,
    CviceniaStrankaComponent,
    CviceniaFormularComponent,
    SkriptaFormularComponent,
    SkriptaStrankaComponent,
    SkriptaZoznamComponent,
    QuizFormularComponent,
    QuizStrankaComponent,
    QuizZoznamComponent,
    FAQStrankaComponent,

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
