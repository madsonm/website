import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTableHouseguestsComponent } from './table-houseguests.component';

describe('TableHouseguestsComponent', () => {
  let component: AdminBigbrotherTableHouseguestsComponent;
  let fixture: ComponentFixture<AdminBigbrotherTableHouseguestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTableHouseguestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTableHouseguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
