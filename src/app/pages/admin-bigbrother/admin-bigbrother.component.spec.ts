import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherComponent } from './admin-bigbrother.component';

describe('AdminBigbrotherComponent', () => {
  let component: AdminBigbrotherComponent;
  let fixture: ComponentFixture<AdminBigbrotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBigbrotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
