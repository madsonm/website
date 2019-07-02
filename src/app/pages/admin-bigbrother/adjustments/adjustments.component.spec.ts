import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherAdjustmentsComponent } from './adjustments.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherAdjustmentsComponent;
  let fixture: ComponentFixture<AdminBigbrotherAdjustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherAdjustmentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
