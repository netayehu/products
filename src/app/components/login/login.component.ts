import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(email: string, password: string) {
    let subscription = this.loginService.login(email, password).subscribe({
      next: (token) => {
        sessionStorage.setItem('token', token.toString());
        this.router.navigate(["welcome/main"]);
      },
      error: (e) => {
        console.dir(e);
        let errJson=e.error;
        let errObj=JSON.parse(errJson)
        console.dir(errObj);
        let errMsg=errObj.message;
        alert(errMsg);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }

}
