import { TeamsService } from 'src/app/Domain/Services/teams.service';
import { PlayersService } from 'src/app/Domain/Services/players.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Domain/Models/team';

@Component({
  selector: 'app-updatePlayer',
  templateUrl: './updatePlayer.component.html',
  styleUrls: ['./updatePlayer.component.css']
})
export class UpdatePlayerComponent implements OnInit {
  player: any;
  teams: Array<Team> = [];

  constructor(private playerService: PlayersService, private teamService: TeamsService,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.playerService.getPlayer(id).subscribe(response =>{
      debugger;
      this.player = response;
    },error => {
      console.log(error);
    })

    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(response => {
      this.teams = response;
    }, error => {
      console.log(error);
    })
  }


  updateTeam(){
      debugger;
      this.playerService.updatePlayer(this.player).subscribe(response => {
        this.router.navigateByUrl('/players');
      }, error => {
        console.log(error);
      });
    }
    Back(){
      this.router.navigateByUrl('/players');
    }
}
