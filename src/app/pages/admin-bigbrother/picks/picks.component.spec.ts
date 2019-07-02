import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherPicksComponent } from './picks.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherPicksComponent;
  let fixture: ComponentFixture<AdminBigbrotherPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherPicksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
