import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepDashboardComponent } from './recep-dashboard.component';

describe('RecepDashboardComponent', () => {
  let component: RecepDashboardComponent;
  let fixture: ComponentFixture<RecepDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
