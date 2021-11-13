import { TeamsService } from './../../Domain/Services/teams.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/Domain/Models/team';
import { AccountService } from 'src/app/Domain/Services/account.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Array<Team> = [];
  isAdmin: boolean = false;

  constructor(private router: Router, private teamService: TeamsService) {
      const user = localStorage.getItem('user');
      if(user)
        this.isAdmin = JSON.parse(user).username == 'admin';
     }

  ngOnInit(): void {
    debugger;
    this.getTeams();
  }
  getTeams(){
    this.teamService.getTeams().subscribe(response => {
      this.teams = response;
    }, error => {
      console.log(error);
    })
  }
  deleteTeam(id:any){
    debugger;
    var res = confirm("Are you sure for deleting selected team?!");
    if (res == true) {
      this.teamService.deleteTeam(id).subscribe(response => {
        this.getTeams();
      }, error => {
        console.log(error);
      })
    } else {
        return;
    }
  }
  addTeam(){
    this.router.navigate(['/createteam']);
  }
  teamDetails(id: number){
    debugger;
    this.router.navigate(['/teamdetails', id]);
  }

  updateTeam(id: number){
    debugger;
    this.router.navigate(['/updateTeam', id]);
  }
}
