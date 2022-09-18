import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MenuComponent} from './menu/menu.component';
import {OsobaStrankaComponent} from "./osoba/osoba-stranka/osoba-stranka.component";
import {VakcinaStrankaComponent} from "./vakcina/vakcina-stranka/vakcina-stranka.component";
import {OckovanostStrankaComponent} from "./ockovanost/ockovanost-stranka/ockovanost-stranka.component";
import {QuizComponent} from "./quiz/quiz.component";
import {SkriptaComponent} from "./skripta/skripta.component";
import {CviceniaComponent} from "./cvicenia/cvicenia.component";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'vakcina',
    component: VakcinaStrankaComponent
  },
  {
    path: 'ockovanost',
    component: OckovanostStrankaComponent
  },
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
    component: CviceniaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
