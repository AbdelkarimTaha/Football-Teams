import { UpdatePlayerComponent } from './Admin/updatePlayer/updatePlayer.component';
import { CreatePlayerComponent } from './Admin/createPlayer/createPlayer.component';
import { PlayersDetailsComponent } from './Shared/players-details/players-details.component';
import { PlayersComponent } from './Shared/players/players.component';
import { TeamsDetailsComponent } from './Shared/teams-details/teams-details.component';
import { TeamsComponent } from './Shared/teams/teams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Shared/login/login.component';
import { RegisterComponent } from './Shared/register/register.component';
import { AuthGuard } from './Domain/_guards/auth.guard';
import { CreateteamComponent } from './Admin/createteam/createteam.component';
import { UpdateteamComponent } from './Admin/updateteam/updateteam.component';

const routes: Routes = [
  {path: '', component: TeamsComponent, canActivate:[AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'teams', component: TeamsComponent, canActivate:[AuthGuard]},
  {path: 'teamdetails/:id', component: TeamsDetailsComponent, canActivate:[AuthGuard]},
  {path: 'createteam', component: CreateteamComponent, canActivate:[AuthGuard]},
  {path: 'updateTeam/:id', component: UpdateteamComponent, canActivate:[AuthGuard]},

  {path: 'players', component: PlayersComponent, canActivate:[AuthGuard]},
  {path: 'players/:id', component: PlayersDetailsComponent, canActivate:[AuthGuard]},
  {path: 'createPlayer', component: CreatePlayerComponent, canActivate:[AuthGuard]},
  {path: 'updatePlayer/:id', component: UpdatePlayerComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
