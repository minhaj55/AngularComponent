import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  loginForm:FormGroup;
  switchToLogin = true;
  bsValue: Date ;

  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.bsValue = new Date();
    this.loginForm = this.form.group({
      email:['',Validators.required],
      dob:[null,Validators.required],
      pass:['',Validators.required]


    })

  }
toggleLogin() {this.switchToLogin = true;}
swithcToregister() { this.switchToLogin = !this.switchToLogin;}

}
