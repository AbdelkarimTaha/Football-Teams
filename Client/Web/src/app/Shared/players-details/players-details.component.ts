import { PlayersService } from './../../Domain/Services/players.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {
  player: any = {};
  constructor(private playerService: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.playerService.getPlayer(id).subscribe(response =>{
      debugger;
      this.player = response;
    },error => {
      console.log(error);
    })
  }

}
