import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerLicenceComponent } from './learner-licence.component';

describe('LearnerLicenceComponent', () => {
  let component: LearnerLicenceComponent;
  let fixture: ComponentFixture<LearnerLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerLicenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
