import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InscriptionDialogComponent} from "../../inscription-dialog/inscription-dialog.component";

@Component({
  selector: 'app-tournament-home',
  templateUrl: './tournament-home.component.html',
  styleUrls: ['./tournament-home.component.css']
})
export class TournamentHomeComponent {
  constructor(private dialog:MatDialog) {
  }
  openDialog(){

    this.dialog.open(InscriptionDialogComponent,{
      width:'60%',
      height:'400px'
    })
  }
}
