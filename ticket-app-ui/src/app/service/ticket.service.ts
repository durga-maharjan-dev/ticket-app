import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private BASE_URL = "http://localhost:8080/ticket"
 
  constructor(
    private httpClient: HttpClient
  ) { }


  async createTicket(token: any, ticket: any): Promise<any> {
    const url = `${this.BASE_URL}/create`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    try{
      const response = await this.httpClient.post<any>(url, ticket ,{headers}).toPromise();
      return response;
    }catch(error: any){
      throw error;
    }
  }


  async getTickets(token: any){
    const url= `${this.BASE_URL}/all`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = this.httpClient.get<any>(url,{headers}).toPromise();
      return response;
    }catch(error: any){
      throw error;
    }
  }

  async getEmployeeTickets(token: any){
    const url= `${this.BASE_URL}/employee`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
      const response = this.httpClient.get<any>(url,{headers}).toPromise();
      return response;
    }catch(error: any){
      throw error;
    }
  }



}
