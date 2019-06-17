import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTableEventsComponent } from './table-events.component';

describe('TableEventsComponent', () => {
  let component: AdminBigbrotherTableEventsComponent;
  let fixture: ComponentFixture<AdminBigbrotherTableEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTableEventsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTableEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
