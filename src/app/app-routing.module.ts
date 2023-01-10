import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from './menu/menu.component';
import {QuizComponent} from "./quiz/quiz.component";
import {SkriptaComponent} from "./skripta/skripta.component";
import {CviceniaStrankaComponent} from "./cvicenia/cvicenia-stranka/cvicenia-stranka.component"

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'skripta',
    component: SkriptaComponent
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
