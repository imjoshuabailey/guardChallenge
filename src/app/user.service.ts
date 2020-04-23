import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = false;
  username = null;
  password = null;
  constructor(private router: Router, ) { }

  signIn() {
    if(this.username === "user" && this.password === "1234") {
      this.loggedIn = true;
      this.router.navigate([`/home/`, this.username])
    }else{
      alert("invalid credetials")
    }
  }
}
