import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit  {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  
  ngOnInit() {
  }

  onSubmit() {
    this.authService.login();
  }

}
