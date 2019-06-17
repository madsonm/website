import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbSelectPlayerComponent } from './bb-select-player.component';

describe('BbSelectPlayerComponent', () => {
  let component: BbSelectPlayerComponent;
  let fixture: ComponentFixture<BbSelectPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbSelectPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbSelectPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
