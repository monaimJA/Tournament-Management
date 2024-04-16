import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home.component';
import {LatestMatchesComponent} from './latest-matches/latest-matches.component';
import {TournamentHomeComponent} from './tournament/tournament-home/tournament-home.component';
import {InscriptionDialogComponent} from './inscription-dialog/inscription-dialog.component';
import {SharedModule} from "primeng/api";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [LoginComponent, HomeComponent, TournamentHomeComponent, LatestMatchesComponent, InscriptionDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class HomeModule { }
