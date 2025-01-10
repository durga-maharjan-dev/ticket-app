import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  isAuthenticated=false;
  isAdmin = false;
  isManager = false;
  isEmployee = false;
  profile:any;
  errorMessage:string = '';

  constructor(
    private authService: AuthService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
 
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
    this.isManager = this.authService.isManager();
    this.isEmployee = this.authService.isEmployee();
    this.getProfile();
  }

  async getProfile(){
    const token = localStorage.getItem('token');
    try{
      const response = await this.authService.profile(token);
      if(response && response.statusCode === 200 && response.user){
        this.profile = response.user;
      }else{
        this.router.navigate(['/']);
      }
    }catch(error: any){
      this.showError(error.message);
    }
  }

  showError(message: any){
    this.errorMessage = message;
    setTimeout( () =>{
      this.errorMessage = '';
    }, 5000)
  }






}
