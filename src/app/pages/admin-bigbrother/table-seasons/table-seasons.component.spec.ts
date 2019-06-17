import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTableSeasonsComponent } from './table-seasons.component';

describe('TableSeasonsComponent', () => {
  let component: AdminBigbrotherTableSeasonsComponent;
  let fixture: ComponentFixture<AdminBigbrotherTableSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTableSeasonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTableSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
