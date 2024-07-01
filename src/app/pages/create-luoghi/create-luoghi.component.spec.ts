import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLuoghiComponent } from './create-luoghi.component';

describe('CreateLuoghiComponent', () => {
  let component: CreateLuoghiComponent;
  let fixture: ComponentFixture<CreateLuoghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLuoghiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLuoghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
