import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepHeaderComponent } from './recep-header.component';

describe('RecepHeaderComponent', () => {
  let component: RecepHeaderComponent;
  let fixture: ComponentFixture<RecepHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
