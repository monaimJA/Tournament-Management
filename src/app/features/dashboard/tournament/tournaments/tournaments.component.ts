import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {Tournament} from "../../../../core/models/Tournament";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {TournamentService} from "../../../../core/services/tournament/tournament.service";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {TournamentAddDialogComponent} from "../tournament-add-dialog/tournament-add-dialog.component";
import {TournamentEditDialogComponent} from "../tournament-edit-dialog/tournament-edit-dialog.component";
import {PlayerService} from "../../../../core/services/player/player.service";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit, AfterViewInit {

  tournaments: Tournament[] | null = null;
  dataSource: MatTableDataSource<Tournament>;
  displayedColumns: string[] = ['label','startDate','endDate', 'statusTournamentAndMatch', 'actions'];
  @ViewChild('createTournamentModal') createTournamentModal: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  showFirstLastButton: boolean = true;

  constructor(private dialog: MatDialog, private router: Router, private fb: FormBuilder,
              private playerService:PlayerService,
              private tournamentService: TournamentService,
              private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<Tournament>([]);
  }

  ngOnInit(): void {
    this.getTournaments();

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe((
        data => {
          this.tournaments = data;
          this.dataSource.data = this.tournaments;
          console.log(this.dataSource.data);
        }
    ))
  }

  deleteTournament(tournament: Tournament) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(
        result => {
          if (result) {
            this.tournamentService.deleteTournament(tournament.id).subscribe({
              next: (resp) => {
                this.tournamentService.getTournaments().subscribe(tournaments => {
                  this.tournaments = tournaments;
                  this.getTournaments()
                });
              },
              error: err => {
                console.error(err);
              }
            });
          }
        }
    )
  }

  saveTournament() {
    const dialogRef = this.dialog.open(TournamentAddDialogComponent, {
      height: '500px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: data => {
        this.getTournaments();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateTournament(tournament: Tournament) {
    const dialogRef = this.dialog.open(TournamentEditDialogComponent);
    dialogRef.componentInstance.tournament = tournament;
    dialogRef.afterClosed().subscribe({
      next: data => {
        this.getTournaments();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onStatusChange($event: MatSelectChange, id : number) {
    this.playerService.notifyPlayers(id, $event.value).subscribe((
        data => {
          this.getTournaments();
          //this.dataSource.data = this.tournaments;
          //console.log(this.dataSource.data);
        }
    ))
  }
}
