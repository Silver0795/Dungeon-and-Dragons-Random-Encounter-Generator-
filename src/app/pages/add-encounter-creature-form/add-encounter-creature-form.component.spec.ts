import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncounterCreatureFormComponent } from './add-encounter-creature-form.component';

describe('AddEncounterCreatureFormComponent', () => {
  let component: AddEncounterCreatureFormComponent;
  let fixture: ComponentFixture<AddEncounterCreatureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEncounterCreatureFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEncounterCreatureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
