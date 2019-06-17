import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherTablePlayersComponent } from './table-players.component';

describe('TablePlayersComponent', () => {
  let component: AdminBigbrotherTablePlayersComponent;
  let fixture: ComponentFixture<AdminBigbrotherTablePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherTablePlayersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherTablePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
