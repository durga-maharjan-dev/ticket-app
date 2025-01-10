import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  BASE_URL = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) { }

  async register(user: any, token: any) : Promise<any>{
    const url = `${this.BASE_URL}/register`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
     try{
       const response = this.httpClient.post<any>(url, user).toPromise();
       return response;
     }catch(error){
       throw error;
     }
  }

  async login(loginRequest: any) : Promise<any>{
    const url = `${this.BASE_URL}/login`;
    try{
       const response = await this.httpClient.post<any>(url, loginRequest).toPromise();
       return response;
    }catch(error : any){
      throw error;
    }
  }

  async profile(token: any): Promise<any>{
    const url = `http://localhost:8080/all/profile`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    try{
     const response = await this.httpClient.get<any>(url, {headers}).toPromise();
     return response;
    } catch(error: any){
      throw error;
    }


  }



 // Authentication Methods

 logOut(): void{
  if(typeof localStorage !== 'undefined'){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
 }

 isAuthenticated(): boolean{
  if(typeof localStorage !== 'undefined'){
     return localStorage.getItem('token') != null && localStorage.getItem('role') != null;
  }
  return false;
 }

 isAdmin(): boolean {
  if (typeof localStorage !== 'undefined'){
    return localStorage.getItem('role') === 'ADMIN';
  }
  return false;
 }

 isManager(): boolean{
  if(typeof localStorage !== 'undefined'){
    return localStorage.getItem('role') === 'MANAGER';
  }
  return false;
 }
 
 isEmployee(): boolean{
  if (typeof localStorage !== 'undefined'){
    return localStorage.getItem('role') === 'EMPLOYEE';
  }
  return false;
 }

}
