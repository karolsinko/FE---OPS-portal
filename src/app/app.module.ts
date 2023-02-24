import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuComponent} from "./menu/main/menu.component";
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
import {SkriptaFormularComponent} from './skripta/linux/skripta-formular/skripta-formular.component';
import {SkriptaStrankaComponent} from './skripta/linux/skripta-stranka/skripta-stranka.component';
import {SkriptaZoznamComponent} from './skripta/linux/skripta-zoznam/skripta-zoznam.component';
import {QuizLinuxStrankaComponent} from './quiz/linux/quiz-stranka/quiz-linux-stranka.component';
import {QuizLinuxComponent} from './quiz/linux/quiz/quiz-linux.component';
import {FAQStrankaComponent} from './FAQ/faq-stranka/faq-stranka.component';
import {MatCardModule} from "@angular/material/card";
import {LinuxStrankaComponent} from './cvicenia/linux/linux-stranka/linux-stranka.component';
import {CStrankaComponent} from './cvicenia/c/c-stranka/c-stranka.component';
import {BashStrankaComponent} from './cvicenia/bash/bash-stranka/bash-stranka.component';
import {LinuxFormularComponent} from './cvicenia/linux/linux-formular/linux-formular.component';
import {LinuxZoznamComponent} from './cvicenia/linux/linux-zoznam/linux-zoznam.component';
import {CFormularComponent} from './cvicenia/c/c-formular/c-formular.component';
import {CZoznamComponent} from './cvicenia/c/c-zoznam/c-zoznam.component';
import {BashFormularComponent} from './cvicenia/bash/bash-formular/bash-formular.component';
import {BashZoznamComponent} from './cvicenia/bash/bash-zoznam/bash-zoznam.component';
import {AdminComponent} from './admin/admin.component';
import {KonzolaComponent} from './admin/konzola/linux/cvicenia/konzola-stranka/konzola.component';
import {KonzolaFormularComponent} from './admin/konzola/linux/cvicenia/konzola-formular/konzola-formular.component';
import {KonzolaZoznamComponent} from './admin/konzola/linux/cvicenia/konzola-zoznam/konzola-zoznam.component';
import {MenuKonzolaComponent} from './menu/menu-konzola/menu-konzola.component';
import {KonzolaFormularCComponent} from './admin/konzola/c/cvicenia/konzola-formular-c/konzola-formular-c.component';
import {KonzolaStrankaCComponent} from './admin/konzola/c/cvicenia/konzola-stranka-c/konzola-stranka-c.component';
import {KonzolaZoznamCComponent} from './admin/konzola/c/cvicenia/konzola-zoznam-c/konzola-zoznam-c.component';
import {
  KonzolaFormularBashComponent
} from './admin/konzola/bash/cvicenia/konzola-formular-bash/konzola-formular-bash.component';
import {
  KonzolaStrankaBashComponent
} from './admin/konzola/bash/cvicenia/konzola-stranka-bash/konzola-stranka-bash.component';
import {
  KonzolaZoznamBashComponent
} from './admin/konzola/bash/cvicenia/konzola-zoznam-bash/konzola-zoznam-bash.component';
import {
  KonzolaFormularSkriptyComponent
} from './admin/konzola/linux/skripty/konzola-formular-skripty/konzola-formular-skripty.component';
import {
  KonzolaZoznamSkriptyComponent
} from './admin/konzola/linux/skripty/konzola-zoznam-skripty/konzola-zoznam-skripty.component';
import {
  KonzolaStrankaSkriptyComponent
} from './admin/konzola/linux/skripty/konzola-stranka-skripty/konzola-stranka-skripty.component';
import {EditorComponent} from './admin/konzola/editor/editor.component';
import {
  KonzolaFormularQuizComponent
} from './admin/konzola/linux/quiz/konzola-formular-quiz/konzola-formular-quiz.component';
import {KonzolaZoznamQuizComponent} from './admin/konzola/linux/quiz/konzola-zoznam-quiz/konzola-zoznam-quiz.component';
import {
  KonzolaStrankaQuizComponent
} from './admin/konzola/linux/quiz/konzola-stranka-quiz/konzola-stranka-quiz.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatSortModule} from "@angular/material/sort";
import {QuizBashComponent} from "./quiz/bash/quiz/quiz-bash.component";
import {QuizBashStrankaComponent} from "./quiz/bash/quiz-stranka/quiz-bash-stranka.component";
import {QuizCComponent} from "./quiz/c/quiz/quiz-c.component";
import {QuizCStrankaComponent} from "./quiz/c/quiz-stranka/quiz-c-stranka.component";
import {MenuCComponent} from './menu/menu-c/menu-c.component';
import {MenuLinuxComponent} from './menu/menu-linux/menu-linux.component';
import {MenuBashComponent} from './menu/menu-bash/menu-bash.component';
import {
  KonzolaZoznamQuizCComponent
} from "./admin/konzola/c/quiz/konzola-zoznam-quiz-c/konzola-zoznam-quiz-c.component";
import {
  KonzolaStrankaQuizCComponent
} from "./admin/konzola/c/quiz/konzola-stranka-quiz-c/konzola-stranka-quiz-c.component";
import {
  KonzolaFormularQuizCComponent
} from "./admin/konzola/c/quiz/konzola-formular-quiz-c/konzola-formular-quiz-c.component";
import {
  KonzolaFormularQuizBashComponent
} from './admin/konzola/bash/quiz/konzola-formular-quiz-bash/konzola-formular-quiz-bash.component';
import {
  KonzolaZoznamQuizBashComponent
} from './admin/konzola/bash/quiz/konzola-zoznam-quiz-bash/konzola-zoznam-quiz-bash.component';
import {
  KonzolaStrankaQuizBashComponent
} from './admin/konzola/bash/quiz/konzola-stranka-quiz-bash/konzola-stranka-quiz-bash.component';
import { SkriptaFormularCComponent } from './skripta/c/skripta-formular-c/skripta-formular-c.component';
import { SkriptaStrankaCComponent } from './skripta/c/skripta-stranka-c/skripta-stranka-c.component';
import { SkriptaZoznamCComponent } from './skripta/c/skripta-zoznam-c/skripta-zoznam-c.component';
import { SkriptaFormularBashComponent } from './skripta/bash/skripta-formular-bash/skripta-formular-bash.component';
import { SkriptaZoznamBashComponent } from './skripta/bash/skripta-zoznam-bash/skripta-zoznam-bash.component';
import { SkriptaStrankaBashComponent } from './skripta/bash/skripta-stranka-bash/skripta-stranka-bash.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkriptaZoznamComponent,
    SkriptaStrankaComponent,
    SkriptaFormularComponent,
    SkriptaFormularComponent,
    SkriptaStrankaComponent,
    SkriptaZoznamComponent,
    QuizLinuxStrankaComponent,
    QuizLinuxComponent,
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
    KonzolaFormularSkriptyComponent,
    KonzolaZoznamSkriptyComponent,
    KonzolaStrankaSkriptyComponent,
    EditorComponent,
    KonzolaFormularQuizComponent,
    KonzolaZoznamQuizComponent,
    KonzolaStrankaQuizComponent,
    QuizLinuxComponent,
    QuizLinuxStrankaComponent,
    QuizBashComponent,
    QuizBashStrankaComponent,
    QuizCComponent,
    QuizCStrankaComponent,
    MenuCComponent,
    MenuLinuxComponent,
    MenuBashComponent,
    KonzolaZoznamQuizCComponent,
    KonzolaFormularQuizCComponent,
    KonzolaStrankaQuizCComponent,
    KonzolaFormularQuizBashComponent,
    KonzolaZoznamQuizBashComponent,
    KonzolaStrankaQuizBashComponent,
    SkriptaFormularCComponent,
    SkriptaStrankaCComponent,
    SkriptaZoznamCComponent,
    SkriptaFormularBashComponent,
    SkriptaZoznamBashComponent,
    SkriptaStrankaBashComponent,

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
        MatCardModule,
        MatRadioModule,
        MatSidenavModule,
        MatDividerModule,
        MatExpansionModule,
        MatMenuModule,
        MatSortModule
    ],
  providers: [
    AdminComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
