import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {LoginComponent} from "./login/login.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../shared/shared.module";
import {LatestMatchesComponent} from './latest-matches/latest-matches.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {TournamentHomeComponent} from './tournament/tournament-home/tournament-home.component';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent, TournamentHomeComponent, LatestMatchesComponent, InscriptionDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
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
