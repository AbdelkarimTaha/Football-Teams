import { Player } from './../../Domain/Models/player';
import { TeamsService } from './../../Domain/Services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createteam',
  templateUrl: './createteam.component.html',
  styleUrls: ['./createteam.component.css']
})
export class CreateteamComponent implements OnInit {
  model: any = {};
  players: Array<any> = [
    {id: 0, name: "test", dateOfBirth: null, nationality: null, imageUrl: null, teamId: 0}
  ];
  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
  }

  createTeam(){
      debugger;
      this.model.players = this.players;
      console.log(this.model);
      this.teamsService.insertTeam(this.model).subscribe(response => {
        this.router.navigateByUrl('/teams');
      }, error => {
        console.log(error);
      });
    }

    AddPlayer(){
      console.log(this.players);

      this.players.push(
        {id: 0, name: null, dateOfBirth: null, nationality: null, imageUrl: null, teamId: 0}
        );

        console.log(this.players);
    }

    Back(){
      this.router.navigateByUrl('/teams');
    }
}
