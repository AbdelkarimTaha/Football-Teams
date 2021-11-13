import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Player } from '../Models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<Array<Player>>(this.baseUrl + 'Player/GetPlayers').pipe(
      map((response: Array<Player>) => {
        return response;
      })
    )
  }
  getPlayer(id: any){
    debugger;
    return this.http.post<Player>(this.baseUrl + 'Player/GetPlayer' , id).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  insertPlayer(player : Player){
    debugger;
    return this.http.post<boolean>(this.baseUrl + 'Player/InsertPlayer' , player).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  updatePlayer(player : Player){
    return this.http.post<boolean>(this.baseUrl + 'Player/UpdatePlayer' ,player).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  deletePlayer(id:any){
    return this.http.post<boolean>(this.baseUrl + 'Player/DeletePlayer' , id).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

}
