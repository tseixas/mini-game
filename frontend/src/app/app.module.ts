import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { PlayerService } from './core/services/player.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ModulesModule,
    SharedModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
