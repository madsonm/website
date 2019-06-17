import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTableScoringComponent } from './table-scoring.component';

describe('TableScoringComponent', () => {
  let component: AdminBigbrotherTableScoringComponent;
  let fixture: ComponentFixture<AdminBigbrotherTableScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTableScoringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTableScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
