import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CreateTicketComponent } from './component/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './component/view-tickets/view-tickets.component';
import { EmployeeDashboardComponent } from './component/employee-dashboard/employee-dashboard.component';
import { ViewEmployeeTicketsComponent } from './component/view-employee-tickets/view-employee-tickets.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent},
  {path:'create-ticket',component:CreateTicketComponent},
  {path:'view-tickets', component: ViewTicketsComponent},
  {path: 'employee-dashboard', component:EmployeeDashboardComponent},
  {path:'view-employee-tickets', component:ViewEmployeeTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
