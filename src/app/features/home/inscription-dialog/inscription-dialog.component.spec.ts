import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDialogComponent } from './inscription-dialog.component';

describe('InscriptionDialogComponent', () => {
  let component: InscriptionDialogComponent;
  let fixture: ComponentFixture<InscriptionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionDialogComponent]
    });
    fixture = TestBed.createComponent(InscriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
