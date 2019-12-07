import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeeComponent } from './app-employee.component';

describe('AppEmployeeComponent', () => {
  let component: AppEmployeeComponent;
  let fixture: ComponentFixture<AppEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
