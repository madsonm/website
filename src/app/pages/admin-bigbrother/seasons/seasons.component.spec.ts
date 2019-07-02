import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherSeasonsComponent } from './seasons.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherSeasonsComponent;
  let fixture: ComponentFixture<AdminBigbrotherSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherSeasonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
