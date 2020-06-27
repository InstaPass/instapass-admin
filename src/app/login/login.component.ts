import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '/node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(loginPayload).subscribe(data => {
      debugger;
      
      window.localStorage.setItem('token', data.jwt_token);
      this.router.navigateByUrl("t");

      // TODO: check status
      // if (data.status === 'ok') {
      //   window.localStorage.setItem('token', data.jwt_token);
      //   this.router.navigateByUrl("t");
      // }else{
      //   this.invalidLogin = true;
      //   alert(data.msg);
      // }

    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}