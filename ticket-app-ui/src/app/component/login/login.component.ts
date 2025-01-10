import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';

  loginForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  async handleLogin(){
   try{
    const response = await this.authService.login(this.loginForm.value);
    if (response.statusCode === 200){
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      if (localStorage.getItem('role') === 'EMPLOYEE'){
        this.router.navigate(['/employee-dashboard'])
      }else{
        this.router.navigate(['/dashboard']);
      }
    }else{
      this.showError(response.message);
    }
   }catch(error: any){
    this.showError(error.message);
   }
  }

  showError(message: string){
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }





}
