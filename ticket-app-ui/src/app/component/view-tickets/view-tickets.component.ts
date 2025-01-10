import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {

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
        const response = await this.ticketService.getTickets(token);
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




}
