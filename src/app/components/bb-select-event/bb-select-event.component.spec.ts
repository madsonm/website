import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbSelectEventComponent } from './bb-select-event.component';

describe('BbSelectEventComponent', () => {
  let component: BbSelectEventComponent;
  let fixture: ComponentFixture<BbSelectEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbSelectEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbSelectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
