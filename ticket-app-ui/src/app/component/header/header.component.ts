import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router

  ){}

  ngOnInit(): void {
     this.isAuthenticated =  this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
