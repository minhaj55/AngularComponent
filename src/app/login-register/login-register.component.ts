import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  switchToLogin: boolean = true;
  appliedClass: string = 'active';
  constructor() { }

  ngOnInit() {
  }
  toggleLogin() {this.switchToLogin = true;
  }
swithcToregister() {
  this.switchToLogin = false;
}
}