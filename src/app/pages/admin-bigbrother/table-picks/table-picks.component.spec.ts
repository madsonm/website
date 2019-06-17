import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTablePicksComponent } from './table-picks.component';

describe('TablePicksComponent', () => {
  let component: AdminBigbrotherTablePicksComponent;
  let fixture: ComponentFixture<AdminBigbrotherTablePicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTablePicksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTablePicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
