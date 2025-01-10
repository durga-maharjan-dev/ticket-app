import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private BASE_URL="http://localhost:8080/manager";
  private TICKET_BASE_URL="http://localhost:8080/ticket";

  constructor(private readonly httpClient: HttpClient) { }


  getEmployees(token: any): Promise<any>{
    const url = `${this.BASE_URL}/employees`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    try{
     const response = this.httpClient.get<any>(url, {headers}).toPromise();
     return response;

    }catch(error: any){
      throw error;
    }
  }

  async createTicket(token: any,ticket : any): Promise<any>{
    const url = `${this.TICKET_BASE_URL}/create`;
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    }
    )
    try{
      const response = await this.httpClient.post<any>(url, {headers}).toPromise();
      return response;
    }catch(error: any){
      throw error;
    }
  }


}
