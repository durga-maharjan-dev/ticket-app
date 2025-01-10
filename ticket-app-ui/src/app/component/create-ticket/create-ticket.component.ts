import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { ManagerService } from 'src/app/service/manager.service';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

 errorMessage='';
 message='';
 ticketForm!: FormGroup;
//  employees: any[] = [];
 employeeFirstNames: any[] = [];

  constructor(
    private employeeService: EmployeeService,
    private ticketService: TicketService
  ){}

  ngOnInit(): void {
    this.getEmployeeFirstNames();
    this.ticketForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      issuedTo: new FormControl(null, Validators.required)
    })
  }

 async handleCreateTicket(){
    console.log(this.ticketForm.value);
    try{
      if(this.ticketForm.invalid){
        alert("fill up all required fields");
      }
       const token = localStorage.getItem('token');
      if(!token){
        this.showError("invalid token")
      }
     
      const response =  await this.ticketService.createTicket(token, this.ticketForm.value);
      if(response && response.statusCode === 200 && response.message){
        this.message = response.message;
      }

    }catch(error: any){
      this.showError(error.message);
    }
  }

  //getting all employee -- to get the names
  async getEmployeeFirstNames(){
    try{
      const token = localStorage.getItem('token');
      if(!token){
        this.showError("invalid token");
      }
      const response =  await this.employeeService.getEmployeeFirstNames(token);
      console.log(response);
      if(response.statusCode === 200){
        this.employeeFirstNames = response.employeeFirstNames;
      }else{
        this.showError("no employee found");
      }
    }catch (error: any){
      this.showError(error.message)
    }
  }


  
    showError(message: string){
      this.errorMessage=message;
      setTimeout(() =>{
          this.errorMessage='';
      }, 10000)
    }

}
