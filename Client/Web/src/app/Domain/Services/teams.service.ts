import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Array<Team>>(this.baseUrl + 'team/GetTeams').pipe(
      map((response: Array<Team>) => {
        return response;
      })
    )
  }
  getTeam(id: any){
    debugger;
    return this.http.post<Team>(this.baseUrl + 'team/GetTeam' , id).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  insertTeam(team : Team){
    return this.http.post<boolean>(this.baseUrl + 'team/InsertTeam' , team).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  updateTeam(team : Team){
    return this.http.post<boolean>(this.baseUrl + 'team/UpdateTeam' ,team).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  deleteTeam(id:any){
    return this.http.post<boolean>(this.baseUrl + 'team/DeleteTeam' , id).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

}
