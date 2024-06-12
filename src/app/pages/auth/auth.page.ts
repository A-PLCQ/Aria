// src/app/pages/auth/auth.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isFlipped = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password);
    }
  }

  register() {
    if (this.registerForm.valid) {
      const { email, password, fullName, address } = this.registerForm.value;
      this.authService.register(email, password, fullName, address);
    }
  }
}
