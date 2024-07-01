import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLuogoComponent } from './update-luogo.component';

describe('UpdateLuogoComponent', () => {
  let component: UpdateLuogoComponent;
  let fixture: ComponentFixture<UpdateLuogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLuogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLuogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
