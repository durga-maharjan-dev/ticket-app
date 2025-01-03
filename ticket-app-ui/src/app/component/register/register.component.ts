import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string ='';
  message: string ='';
  
  constructor(
    private readonly authService:AuthService,
    private readonly router: Router
  ){}
  
  ngOnInit(): void {
    this.registerForm =new FormGroup({
      firstName: new FormControl(null,Validators.required ),
      lastName: new FormControl(null,Validators.required ),
      email: new FormControl(null,[Validators.required, Validators.email] ),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

 async handleRegister(){
    if (this.registerForm.invalid){
      alert("Fill up all required fields");
      return;
    }
    const isConfirm = confirm("Are you sure want to register the user?");
    if(!isConfirm) return;

    try{
       const response = await this.authService.register(this.registerForm.value);
       if (response.statusCode  === 200){
         this.message=response.message;
        this.router.navigate(['/register']);
       }
    }catch(error: any){
      this.showError(error.message);
    }
    
  }

  showError(message: string){
    this.errorMessage = message;
    setTimeout(()=>{
      this.errorMessage ='';
    }, 3000);
  }







}
