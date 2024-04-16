import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tournament} from "../../../../core/models/Tournament";
import {MatDialogRef} from "@angular/material/dialog";
import {TournamentService} from "../../../../core/services/tournament/tournament.service";

@Component({
  selector: 'app-tournament-edit-dialog',
  templateUrl: './tournament-edit-dialog.component.html',
  styleUrls: ['./tournament-edit-dialog.component.css']
})
export class TournamentEditDialogComponent implements OnInit {

  editTournamentFormGroup!: FormGroup;
  @Input() tournament:Tournament | null = null;

  constructor(private matDialogRef : MatDialogRef<TournamentEditDialogComponent> ,private fb: FormBuilder, private tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    // Formatage des dates
    const formattedStartDate = this.tournament?.startDate ? new Date(this.tournament.startDate).toISOString().slice(0, 10) : null;
    const formattedEndDate = this.tournament?.endDate ? new Date(this.tournament.endDate).toISOString().slice(0, 10) : null;

    console.log(formattedStartDate)

    this.editTournamentFormGroup = this.fb.group({
      label: [this.tournament?.label, Validators.required],
      startDate: [formattedStartDate, Validators.required],
      endDate: [formattedEndDate, Validators.required]
    });
  }

  updateTournament() {
    if (!this.tournament) return;
    const updatedTournament = this.editTournamentFormGroup.value;
    //for backend to parse
    updatedTournament.startDate = new Date(updatedTournament.startDate);
    updatedTournament.endDate = new Date(updatedTournament.endDate);
    this.tournamentService.updateTournament(this.tournament.id, updatedTournament).subscribe({
      next: () => {
        this.matDialogRef.close();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  onClose() {
    this.matDialogRef.close();
  }
}
