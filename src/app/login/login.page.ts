import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public _userService: UserService) { }

  ngOnInit() {

  }

  login() {
    this._userService.signIn()
  }
  
}
