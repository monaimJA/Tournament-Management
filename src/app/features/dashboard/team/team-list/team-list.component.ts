import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { PlayerService } from 'src/app/core/services/player/player.service';
import { TeamService } from 'src/app/core/services/team/team.service';
import { TournamentService } from 'src/app/core/services/tournament/tournament.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit{
  tournois: any[]=[];
  equipes: any[]=[];
  joueurs: any[]=[];

  selectedEquipe: number;


  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 5;
  constructor(private tournamentService: TournamentService,
              private teamService:TeamService,
              private playerService:PlayerService) { }

  ngOnInit() {
    this.tournamentService.getTournaments().subscribe((data: any[]) => {
      this.tournois = data;
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
      this.joueurs = [];
      this.dataSource = new MatTableDataSource<any>(this.joueurs);
    });
  }

  onEquipeSelect(event: any) {
    this.playerService.getAllPlayersOfATeam(event).subscribe((data: any[]) => {
      this.joueurs = data;
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
