import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTicketsComponent } from './view-employee-tickets.component';

describe('ViewEmployeeTicketsComponent', () => {
  let component: ViewEmployeeTicketsComponent;
  let fixture: ComponentFixture<ViewEmployeeTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
