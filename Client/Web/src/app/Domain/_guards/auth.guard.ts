import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = !!localStorage.getItem('user');
    if(user)
      return true;
    return false;
  }
}
