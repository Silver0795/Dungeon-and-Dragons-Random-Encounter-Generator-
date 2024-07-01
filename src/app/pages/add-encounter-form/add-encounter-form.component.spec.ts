import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncounterFormComponent } from './add-encounter-form.component';

describe('AddEncounterFormComponent', () => {
  let component: AddEncounterFormComponent;
  let fixture: ComponentFixture<AddEncounterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEncounterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEncounterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
