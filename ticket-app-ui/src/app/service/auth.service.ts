import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  BASE_URL = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) { }

  async register(user: any) : Promise<any>{
    const url = `${this.BASE_URL}/register`;
     try{
       const response = this.httpClient.post<any>(url, user).toPromise();
       return response;
     }catch(error){
       throw error;
     }
  }
}
