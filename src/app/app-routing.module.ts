import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SkriptaStrankaComponent} from "./skripta/skripta-stranka/skripta-stranka.component";
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
import {QuizBashComponent} from "./quiz/bash/quiz/quiz-bash.component";
import {QuizBashStrankaComponent} from "./quiz/bash/quiz-stranka/quiz-bash-stranka.component";
import {QuizCComponent} from "./quiz/c/quiz/quiz-c.component";
import {QuizLinuxComponent} from "./quiz/linux/quiz/quiz-linux.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'FAQ',
    component: FAQStrankaComponent
  },
  //QUIZY
  {
    path: 'quiz/linux',
    component: QuizLinuxComponent
  },
  {
    path: 'quiz/c',
    component: QuizCComponent
  },
  {
    path: 'quiz/bash',
    component: QuizBashComponent
  },
  //SKRIPTA
  {
    path: 'skripta',
    component: SkriptaStrankaComponent
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
    path: 'c',
    component: MenuCComponent
  },
  /*{
    path: 'bash',
    component: MenuBashComponent
  },
  {
    path: 'linux',
    component: MenuLinuxComponent
  }
  */

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
