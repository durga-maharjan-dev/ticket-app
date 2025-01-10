import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private BASE_URL="http://localhost:8080"

  constructor(private readonly httpClient: HttpClient) { }


 async getAllUsers(token : any): Promise<any>{
    const url = `${this.BASE_URL}/admin`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    try{
       const response = await this.httpClient.get<any>(url, {headers}).toPromise();
       return response;
    }catch (error: any){
      throw error;
    }

  }
}
