import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  role: any;
  users: any[] = [];
  errorMessage='';
  employees:any[] = []; // need to get from api
  employeeName='';


  constructor(
    private readonly adminService: AdminService,
    private managerService: ManagerService
  ){}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    if(this.role === 'ADMIN'){
      this.showAllUsers();
    }
    if(this.role === 'MANAGER'){
      // this.getEmployees()
    }
  }

  async showAllUsers(){
    try{
      const token = localStorage.getItem('token');
      if(!token){
        this.showError("INVALID TOKEN");
      }
      const response = await this.adminService.getAllUsers(token);
      if(response && response.statusCode=== 200 && response.userList){
        this.users = response.userList;
        console.log(this.users);
      }
    }catch (error: any){
      this.showError(error.message);
    }
   
  }

  showError(message: string){
    this.errorMessage=message;
    setTimeout(() =>{
        this.errorMessage='';
    }, 5000)
  }



  

}
