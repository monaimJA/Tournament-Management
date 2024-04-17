import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { InscriptionComponent } from '../../inscription/inscription.component';
import { TournamentService } from 'src/app/core/services/tournament/tournament.service';
import { Tournament } from 'src/app/core/models/Tournament';

@Component({
  selector: 'app-tournament-home',
  templateUrl: './tournament-home.component.html',
  styleUrls: ['./tournament-home.component.css']
})
export class TournamentHomeComponent implements OnInit{
  currentTournament : Tournament;
  constructor(private dialog:MatDialog,private tournamentSercive : TournamentService) {
  }
  ngOnInit(): void {
    this.handleCurrentTournament();
  }
  openDialog(){

    this.dialog.open(InscriptionComponent,{
      width:'60%',
      height:'400px'
    })
  }
  handleCurrentTournament(){
    this.tournamentSercive.getCurrentTournament()
    .subscribe((data)=>{this.currentTournament =data;
    } );
  }
  
  inscriptionOk(): boolean {
    return this.currentTournament.statusTournament=="INSCRIPTION"?true:false ;
  }
}
