import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SkriptaStrankaComponent} from "./skripta/linux/skripta-stranka/skripta-stranka.component";
import {QuizLinuxStrankaComponent} from "./quiz/linux/quiz-stranka/quiz-linux-stranka.component";
import {FAQStrankaComponent} from "./FAQ/faq-stranka/faq-stranka.component";
import {CStrankaComponent} from "./cvicenia/c/c-stranka/c-stranka.component";
import {LinuxStrankaComponent} from "./cvicenia/linux/linux-stranka/linux-stranka.component";
import {BashStrankaComponent} from "./cvicenia/bash/bash-stranka/bash-stranka.component";
import {MenuComponent} from "./menu/main/menu.component";
import {AdminComponent} from "./admin/admin.component";
import {EditorComponent} from "./admin/konzola/editor/editor.component";
import {MenuCComponent} from "./menu/menu-c/menu-c.component";
import {QuizCStrankaComponent} from "./quiz/c/quiz-stranka/quiz-c-stranka.component";
import {QuizBashStrankaComponent} from "./quiz/bash/quiz-stranka/quiz-bash-stranka.component";
import {MenuLinuxComponent} from "./menu/menu-linux/menu-linux.component";
import {MenuBashComponent} from "./menu/menu-bash/menu-bash.component";
import {
  KonzolaStrankaQuizCComponent
} from "./admin/konzola/c/quiz/konzola-stranka-quiz-c/konzola-stranka-quiz-c.component";
import {
  KonzolaStrankaQuizBashComponent
} from "./admin/konzola/bash/quiz/konzola-stranka-quiz-bash/konzola-stranka-quiz-bash.component";
import {
  KonzolaStrankaQuizComponent
} from "./admin/konzola/linux/quiz/konzola-stranka-quiz/konzola-stranka-quiz.component";
import {KonzolaStrankaCComponent} from "./admin/konzola/c/cvicenia/konzola-stranka-c/konzola-stranka-c.component";
import {
  KonzolaStrankaBashComponent
} from "./admin/konzola/bash/cvicenia/konzola-stranka-bash/konzola-stranka-bash.component";
import {KonzolaComponent} from "./admin/konzola/linux/cvicenia/konzola-stranka/konzola.component";
import {
  KonzolaStrankaSkriptyComponent
} from "./admin/konzola/linux/skripty/konzola-stranka-skripty/konzola-stranka-skripty.component";
import {SkriptaStrankaCComponent} from "./skripta/c/skripta-stranka-c/skripta-stranka-c.component";
import {SkriptaStrankaBashComponent} from "./skripta/bash/skripta-stranka-bash/skripta-stranka-bash.component";
import {
  KonzolaStrankaSkriptyCComponent
} from "./admin/konzola/c/skripty/konzola-stranka-skripty-c/konzola-stranka-skripty-c.component";
import {
  KonzolaStrankaSkriptyBashComponent
} from "./admin/konzola/bash/skripty/konzola-stranka-skripty-bash/konzola-stranka-skripty-bash.component";

const routes: Routes = [
  //FAQ
  {
    path: 'FAQ',
    component: FAQStrankaComponent
  },
  //QUIZY
  {
    path: 'quiz/linux',
    component: QuizLinuxStrankaComponent
  },
  {
    path: 'quiz/c',
    component: QuizCStrankaComponent
  },
  {
    path: 'quiz/bash',
    component: QuizBashStrankaComponent
  },
  //SKRIPTA
  {
    path: 'skripta/linux',
    component: SkriptaStrankaComponent
  },
  {
    path: 'skripta/c',
    component: SkriptaStrankaCComponent
  },
  {
    path: 'skripta/bash',
    component: SkriptaStrankaBashComponent
  },
  //CVICENIA
  {
    path: 'cvicenia/c',
    component: CStrankaComponent
  },
  {
    path: 'cvicenia/linux',
    component: LinuxStrankaComponent
  },
  {
    path: 'cvicenia/bash',
    component: BashStrankaComponent
  },
  //ADMIN
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/konzola',
    component: EditorComponent,
    canActivate: [AdminComponent]
  },
  //MENU
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'c',
    component: MenuCComponent
  },
  {
    path: 'bash',
    component: MenuBashComponent
  },
  {
    path: 'linux',
    component: MenuLinuxComponent
  },
  //Konzola
  //Quizy
  {
    path: 'admin/konzola/quiz/c',
    component: KonzolaStrankaQuizCComponent
  },
  {
    path: 'admin/konzola/quiz/bash',
    component: KonzolaStrankaQuizBashComponent
  },
  {
    path: 'admin/konzola/quiz/linux',
    component: KonzolaStrankaQuizComponent
  },
  //Cvicenia
  {
    path: 'admin/konzola/cvicenia/c',
    component: KonzolaStrankaCComponent
  },
  {
    path: 'admin/konzola/cvicenia/bash',
    component: KonzolaStrankaBashComponent
  },
  {
    path: 'admin/konzola/cvicenia/linux',
    component: KonzolaComponent
  },
  //Skripta
  {
    path: 'admin/konzola/skripta/linux',
    component: KonzolaStrankaSkriptyComponent
  },
  {
    path: 'admin/konzola/skripta/c',
    component: KonzolaStrankaSkriptyCComponent
  },
  {
    path: 'admin/konzola/skripta/bash',
    component: KonzolaStrankaSkriptyBashComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
