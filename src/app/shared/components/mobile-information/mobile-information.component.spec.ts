import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInformationComponent } from './mobile-information.component';

describe('MobileInformationComponent', () => {
  let component: MobileInformationComponent;
  let fixture: ComponentFixture<MobileInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileInformationComponent]
    });
    fixture = TestBed.createComponent(MobileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
