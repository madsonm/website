import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbSelectHouseguestComponent } from './bb-select-houseguest.component';

describe('BbSelectHouseguestComponent', () => {
  let component: BbSelectHouseguestComponent;
  let fixture: ComponentFixture<BbSelectHouseguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbSelectHouseguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbSelectHouseguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
