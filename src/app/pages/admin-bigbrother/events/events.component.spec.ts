import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherEventsComponent } from './events.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherEventsComponent;
  let fixture: ComponentFixture<AdminBigbrotherEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherEventsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
