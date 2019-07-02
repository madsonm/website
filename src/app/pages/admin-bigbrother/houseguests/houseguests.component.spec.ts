import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherHouseguestsComponent } from './houseguests.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherHouseguestsComponent;
  let fixture: ComponentFixture<AdminBigbrotherHouseguestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherHouseguestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherHouseguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
