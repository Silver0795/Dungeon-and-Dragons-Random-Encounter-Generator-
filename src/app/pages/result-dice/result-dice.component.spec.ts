import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDiceComponent } from './result-dice.component';

describe('ResultDiceComponent', () => {
  let component: ResultDiceComponent;
  let fixture: ComponentFixture<ResultDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultDiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
