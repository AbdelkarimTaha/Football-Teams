import { TeamsService } from './../../Domain/Services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/Domain/Models/team';
import { PlayersService } from 'src/app/Domain/Services/players.service';

@Component({
  selector: 'app-createPlayer',
  templateUrl: './createPlayer.component.html',
  styleUrls: ['./createPlayer.component.css']
})
export class CreatePlayerComponent implements OnInit {
  model: any = {};
  teams: Array<Team> = [];

  constructor(private playerService: PlayersService, private router: Router,
     private teamService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(response => {
      this.teams = response;
    }, error => {
      console.log(error);
    })
  }

  createPlayer(){
      debugger;
      this.playerService.insertPlayer(this.model).subscribe(response => {
        this.router.navigateByUrl('/players');
      }, error => {
        console.log(error);
      });
    }

    Back(){
      this.router.navigateByUrl('/players');
    }
}
