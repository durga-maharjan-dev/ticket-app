import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './component/view-tickets/view-tickets.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { ViewEmployeeTicketsComponent } from './component/view-employee-tickets/view-employee-tickets.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    CreateTicketComponent,
    ViewTicketsComponent,
    EmployeeDashboardComponent,
    ViewEmployeeTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
