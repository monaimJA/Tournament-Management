import {Component, OnInit, ViewChild} from '@angular/core';
import {TournamentService} from "../../../core/services/tournament/tournament.service";
import {TeamService} from "../../../core/services/team/team.service";
import {PlayerService} from "../../../core/services/player/player.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  tournois: any[]=[];
  equipes: any[]=[];
  joueurs: any[]=[];

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'status','redCards','yellowCards'];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 2;
  constructor(private tournamentService: TournamentService,
              private teamService:TeamService,
              private playerService:PlayerService) { }

  ngOnInit() {
    this.tournamentService.getTournaments().subscribe((data: any[]) => {
      this.tournois = data;
      if (this.tournois.length > 0) {
        this.teamService.getTeamsIntournament(this.tournois[0].id).subscribe((data: any[]) => {
          this.equipes = data;
        });
      }
    });
  }
  onTournoiSelect(event: any) {
    this.teamService.getTeamsIntournament(event).subscribe((data: any[]) => {

      this.equipes = data;
      if (this.equipes.length > 0) {
        this.playerService.getAllPlayersOfATeam(this.equipes[0].id).subscribe((data: any[]) => {
          this.joueurs = data;
        });
      }
    });
  }

  onEquipeSelect(event: any) {
    this.playerService.getAllPlayersOfATeam(event).subscribe((data: any[]) => {
      this.joueurs = data;
      // this.dataSource = new MatTableDataSource<any>(this.joueurs);
      // this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<any>(this.joueurs);
      this.dataSource.paginator = this.paginator;
    });
  }

  paginateData() {
    const pageIndex = this.paginator.pageIndex;
    const pageSize = this.paginator.pageSize;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.dataSource = new MatTableDataSource<any>(this.joueurs.slice(startIndex, endIndex));
  }

  onPageChange(event: any) {
    this.paginateData();
  }
}
