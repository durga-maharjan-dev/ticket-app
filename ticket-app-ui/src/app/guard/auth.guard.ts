import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


export const userGuard: CanActivateFn = (route, state) =>{
  if(inject(AuthService).isAuthenticated()){
    return true;
  }else{
    inject(Router).navigate(['/login']);
    return false;
  }
}

export const adminGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isAdmin()){
    return true;
  }else{
    inject(Router).navigate(['/login']);
    return false;
  }
}


