import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Domain/Models/team';
import { TeamsService } from 'src/app/Domain/Services/teams.service';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {
  team: any;
  constructor(private teamsService: TeamsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamsService.getTeam(id).subscribe(response => {
      this.team = response;
    }, error => {
      console.log(error);
    })
  }

}
