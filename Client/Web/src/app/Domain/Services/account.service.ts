import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.baseUrl;

  private currentUserSource: any = new ReplaySubject<any>();
  currentUser = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model: any){
    debugger;
    return this.http.post<any>(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        debugger;
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post<boolean>(this.baseUrl + 'account/register', model).pipe(
      map((response: boolean) => {
        return response;
      })
    )
  }


  setCurrentUser(user: any){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
