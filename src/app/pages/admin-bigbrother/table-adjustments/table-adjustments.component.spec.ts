import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTableAdjustmentsComponent } from './table-adjustments.component';

describe('TableAdjustmentsComponent', () => {
  let component: AdminBigbrotherTableAdjustmentsComponent;
  let fixture: ComponentFixture<AdminBigbrotherTableAdjustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTableAdjustmentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTableAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
