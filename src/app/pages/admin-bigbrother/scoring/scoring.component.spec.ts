import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherScoringComponent } from './scoring.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherScoringComponent;
  let fixture: ComponentFixture<AdminBigbrotherScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherScoringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
