import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {TournamentService} from "../../../../core/services/tournament/tournament.service";
import {SuccessDialogComponent} from "../success-dialog/success-dialog.component";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-tournament-add-dialog',
  templateUrl: './tournament-add-dialog.component.html',
  styleUrls: ['./tournament-add-dialog.component.css']
})
export class TournamentAddDialogComponent implements OnInit {
  addTournamentFormGroup: FormGroup;

  constructor(private dialog: MatDialog, private matDialogRef : MatDialogRef<TournamentAddDialogComponent>,private fb: FormBuilder, private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.addTournamentFormGroup = this.fb.group({
      label: this.fb.control('', [Validators.required]),
      startDate: this.fb.control('', [Validators.required]),
      endDate: this.fb.control('', [Validators.required])
    });  }

  addTournament() {
    let tournament = this.addTournamentFormGroup.value;
    tournament.startDate = new Date(tournament.startDate).toISOString();
    tournament.endDate = new Date(tournament.endDate).toISOString();
    this.tournamentService
        .createTournament(tournament.label, tournament.startDate, tournament.endDate).subscribe({
      next: data => {
        this.matDialogRef.close();
        this.dialog.open(SuccessDialogComponent);
      },
      error: err => {
        this.matDialogRef.close();
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          message: err.error.message
        };
        this.dialog.open(ErrorDialogComponent, dialogConfig);
        console.log(err.error.message);
      }
    });
  }

  onClose() {
    this.matDialogRef.close();
  }
}
