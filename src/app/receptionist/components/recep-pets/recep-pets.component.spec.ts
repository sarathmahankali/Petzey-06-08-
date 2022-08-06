import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepPetsComponent } from './recep-pets.component';

describe('RecepPetsComponent', () => {
  let component: RecepPetsComponent;
  let fixture: ComponentFixture<RecepPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
