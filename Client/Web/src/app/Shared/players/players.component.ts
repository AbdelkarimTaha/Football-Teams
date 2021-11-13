import { PlayersService } from './../../Domain/Services/players.service';
import { Player } from './../../Domain/Models/player';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Array<Player> = [];
  isAdmin: boolean = false;

  constructor(private router: Router, private PlayerService: PlayersService) {
      const user = localStorage.getItem('user');
      if(user)
        this.isAdmin = JSON.parse(user).username == 'admin';
   }

  ngOnInit(): void {
    debugger;
    this.getPlayers();
  }

  getPlayers(){
    this.PlayerService.getPlayers().subscribe(response => {
      this.players = response;
    }, error => {
      console.log(error);
    })
  }

  deletePlayer(id: any){
    debugger;
    var res = confirm("Are you sure for deleting selected player?!");
    if (res == true) {
      this.PlayerService.deletePlayer(id).subscribe(response => {
        this.getPlayers();
      }, error => {
        console.log(error);
      })
    } else {
        return;
    }
  }
  addplayer(){
    this.router.navigate(['/createPlayer']);
  }
  playerDetails(id: number){
    debugger;
    this.router.navigate(['/players', id]);
  }

  updatePlayer(id: number){
    debugger;
    this.router.navigate(['/updatePlayer', id]);
  }
}
