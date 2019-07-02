import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBigbrotherPlayersComponent } from './players.component';

describe('AdminBigbrother$1Component', () => {
  let component: AdminBigbrotherPlayersComponent;
  let fixture: ComponentFixture<AdminBigbrotherPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBigbrotherPlayersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBigbrotherPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
