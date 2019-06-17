import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaryComponent } from './legendary.component';

describe('LegendaryComponent', () => {
  let component: LegendaryComponent;
  let fixture: ComponentFixture<LegendaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
