import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentLicenceComponent } from './permanent-licence.component';

describe('PermanentLicenceComponent', () => {
  let component: PermanentLicenceComponent;
  let fixture: ComponentFixture<PermanentLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentLicenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
