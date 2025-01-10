import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL='http://localhost:8080/employee'

  constructor(private httpClient: HttpClient) { }

  async getEmployeeFirstNames(token: any): Promise<any>{
    const url = `${this.BASE_URL}/all`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    try{
       const response = await this.httpClient.get<any>(url, {headers}).toPromise();
       return response;
    }catch(error: any){
      throw error;
    }

  }
}
