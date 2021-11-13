import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/Domain/Models/team';
import { TeamsService } from 'src/app/Domain/Services/teams.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.css']
})
export class UpdateteamComponent implements OnInit {
  team: any;

  constructor(private teamsService: TeamsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamsService.getTeam(id).subscribe(response =>{
      debugger;
      this.team = response;
    }, error => {
      console.log(error);
    })
  }

  updateTeam(){
      debugger;
      this.teamsService.updateTeam(this.team).subscribe(response => {
        this.router.navigateByUrl('/teams');
      }, error => {
        console.log(error);
      });
    }
    Back(){
      this.router.navigateByUrl('/teams');
    }
}
