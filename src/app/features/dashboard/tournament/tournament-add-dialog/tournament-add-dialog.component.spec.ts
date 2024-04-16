import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentAddDialogComponent } from './tournament-add-dialog.component';

describe('TournamentAddDialogComponent', () => {
  let component: TournamentAddDialogComponent;
  let fixture: ComponentFixture<TournamentAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentAddDialogComponent]
    });
    fixture = TestBed.createComponent(TournamentAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
