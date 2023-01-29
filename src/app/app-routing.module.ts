import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CviceniaStrankaComponent} from "./cvicenia/cvicenia-stranka/cvicenia-stranka.component"
import {SkriptaStrankaComponent} from "./skripta/skripta-stranka/skripta-stranka.component";
import {QuizStrankaComponent} from "./quiz/quiz-stranka/quiz-stranka.component";
import {FAQStrankaComponent} from "./FAQ/faq-stranka/faq-stranka.component";
import {CStrankaComponent} from "./cvicenia/c/c-stranka/c-stranka.component";
import {LinuxStrankaComponent} from "./cvicenia/linux/linux-stranka/linux-stranka.component";
import {BashStrankaComponent} from "./cvicenia/bash/bash-stranka/bash-stranka.component";
import {MenuComponent} from "./menu/menu.component";
import {AdminComponent} from "./admin/admin.component";
import {KonzolaComponent} from "./admin/konzola/linux/konzola-stranka/konzola.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'quiz',
    component: QuizStrankaComponent
  },
  {
    path: 'skripta',
    component: SkriptaStrankaComponent
  },
  {
    path: 'cvicenia',
    component: CviceniaStrankaComponent
  },
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
  {
    path: 'FAQ',
    component: FAQStrankaComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/konzola',
    component: KonzolaComponent,
    canActivate: [AdminComponent]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
