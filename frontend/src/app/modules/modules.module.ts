import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { StartingGameComponent } from './starting-game/starting-game.component';
import { GameComponent } from './game/game.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    RankingComponent,
    StartingGameComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    RankingComponent,
    StartingGameComponent,
    GameComponent
  ]
})
export class ModulesModule { }
