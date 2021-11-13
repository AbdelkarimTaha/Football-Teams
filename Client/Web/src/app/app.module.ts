import { UpdatePlayerComponent } from './Admin/updatePlayer/updatePlayer.component';
import { CreatePlayerComponent } from './Admin/createPlayer/createPlayer.component';
import { LoginComponent } from './Shared/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Shared/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { TeamsComponent } from './Shared/teams/teams.component';
import { TeamsDetailsComponent } from './Shared/teams-details/teams-details.component';
import { PlayersComponent } from './Shared/players/players.component';
import { PlayersDetailsComponent } from './Shared/players-details/players-details.component';
import { CreateteamComponent } from './Admin/createteam/createteam.component';
import { UpdateteamComponent } from './Admin/updateteam/updateteam.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TeamsComponent,
    TeamsDetailsComponent,
    PlayersComponent,
    PlayersDetailsComponent,
    CreateteamComponent,
    UpdateteamComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
