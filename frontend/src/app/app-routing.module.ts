import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './modules/ranking/ranking.component';
import { StartingGameComponent } from './modules/starting-game/starting-game.component';
import { GameComponent } from './modules/game/game.component';

const routes: Routes = [
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'start',
    component: StartingGameComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
