import { Component } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-view-employee-tickets',
  templateUrl: './view-employee-tickets.component.html',
  styleUrls: ['./view-employee-tickets.component.css']
})
export class ViewEmployeeTicketsComponent {

   tickets: any[] = [];
    errorMessage='';
  
    constructor(private ticketService: TicketService){}
   
    ngOnInit(): void {
      this.getTickets();
    }
  
    async getTickets(){
      try{
        const token = localStorage.getItem('token');
        if(token){
          const response = await this.ticketService.getEmployeeTickets(token);
          console.log(response);
          if(response.statusCode === 200 && response.ticketList){
            this.tickets = response.ticketList;
          }
  
        }else{
          this.errorMessage="invalid token";
        }
  
      }catch(error: any){
        this.errorMessage= error.message;
      }
      const token = localStorage.getItem('token');
    }


    //handle Pending
    handlePending(id:any){
      console.log("id: "+ id);

    }
  

}
