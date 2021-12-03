import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccommodationComponent } from './request-accommodation.component';

describe('RequestAccommodationComponent', () => {
  let component: RequestAccommodationComponent;
  let fixture: ComponentFixture<RequestAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAccommodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
