import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from './menu/menu.component';
import {CviceniaStrankaComponent} from "./cvicenia/cvicenia-stranka/cvicenia-stranka.component"
import {SkriptaStrankaComponent} from "./skripta/skripta-stranka/skripta-stranka.component";
import {QuizStrankaComponent} from "./quiz/quiz-stranka/quiz-stranka.component";

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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
