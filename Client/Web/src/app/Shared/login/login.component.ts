import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Domain/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isLogin : boolean = false;
  constructor(public accountService: AccountService, private router: Router) {
      var user = localStorage.getItem('user');
      if(user)
        this.isLogin = true;
    }

  ngOnInit() {
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      if(localStorage.getItem('user')){
        this.isLogin = true;
        this.router.navigateByUrl('');
        this.router.navigateByUrl('/teams');
      }
      else{
        alert("Username or password is incorrect.");
      }
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/login');
    this.isLogin = false;
    window.location.reload();
  }

  register(){
    this.router.navigateByUrl('/register');
  }
}
