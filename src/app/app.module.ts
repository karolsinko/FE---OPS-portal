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
import {MatCardModule} from "@angular/material/card";
import { LinuxStrankaComponent } from './cvicenia/linux/linux-stranka/linux-stranka.component';
import { CStrankaComponent } from './cvicenia/c/c-stranka/c-stranka.component';
import { BashStrankaComponent } from './cvicenia/bash/bash-stranka/bash-stranka.component';
import { LinuxFormularComponent } from './cvicenia/linux/linux-formular/linux-formular.component';
import { LinuxZoznamComponent } from './cvicenia/linux/linux-zoznam/linux-zoznam.component';
import { CFormularComponent } from './cvicenia/c/c-formular/c-formular.component';
import { CZoznamComponent } from './cvicenia/c/c-zoznam/c-zoznam.component';
import { BashFormularComponent } from './cvicenia/bash/bash-formular/bash-formular.component';
import { BashZoznamComponent } from './cvicenia/bash/bash-zoznam/bash-zoznam.component';
import { AdminComponent } from './admin/admin.component';
import { KonzolaComponent } from './admin/konzola/linux/konzola-stranka/konzola.component';
import { KonzolaFormularComponent } from './admin/konzola/linux/konzola-formular/konzola-formular.component';
import { KonzolaZoznamComponent } from './admin/konzola/linux/konzola-zoznam/konzola-zoznam.component';
import { MenuKonzolaComponent } from './menu/menu-konzola/menu-konzola.component';
import { KonzolaFormularCComponent } from './admin/konzola/c/konzola-formular-c/konzola-formular-c.component';
import { KonzolaStrankaCComponent } from './admin/konzola/c/konzola-stranka-c/konzola-stranka-c.component';
import { KonzolaZoznamCComponent } from './admin/konzola/c/konzola-zoznam-c/konzola-zoznam-c.component';
import { KonzolaFormularBashComponent } from './admin/konzola/bash/konzola-formular-bash/konzola-formular-bash.component';
import { KonzolaStrankaBashComponent } from './admin/konzola/bash/konzola-stranka-bash/konzola-stranka-bash.component';
import { KonzolaZoznamBashComponent } from './admin/konzola/bash/konzola-zoznam-bash/konzola-zoznam-bash.component';

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
    LinuxStrankaComponent,
    CStrankaComponent,
    BashStrankaComponent,
    LinuxFormularComponent,
    LinuxZoznamComponent,
    CFormularComponent,
    CZoznamComponent,
    BashFormularComponent,
    BashZoznamComponent,
    AdminComponent,
    KonzolaComponent,
    KonzolaFormularComponent,
    KonzolaZoznamComponent,
    MenuKonzolaComponent,
    KonzolaFormularCComponent,
    KonzolaStrankaCComponent,
    KonzolaZoznamCComponent,
    KonzolaFormularBashComponent,
    KonzolaStrankaBashComponent,
    KonzolaZoznamBashComponent,
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
    MatTableModule,
    MatCardModule
  ],
  providers: [
    AdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
