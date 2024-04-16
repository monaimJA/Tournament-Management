import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {PlayersComponent} from './players/players.component';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {TournamentsComponent} from "./tournament/tournaments/tournaments.component";
import {ConfirmationDialogComponent} from "./tournament/confirmation-dialog/confirmation-dialog.component";
import {SuccessDialogComponent} from "./tournament/success-dialog/success-dialog.component";
import {TournamentAddDialogComponent} from "./tournament/tournament-add-dialog/tournament-add-dialog.component";
import {TournamentEditDialogComponent} from "./tournament/tournament-edit-dialog/tournament-edit-dialog.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {ErrorDialogComponent} from './tournament/error-dialog/error-dialog.component';
import {ScoresComponent} from "./scores/scores.component";
import {BrowserModule} from "@angular/platform-browser";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    PlayersComponent,
    TournamentsComponent,
    ConfirmationDialogComponent,
    SuccessDialogComponent,
    TournamentAddDialogComponent,
    TournamentEditDialogComponent,
    ErrorDialogComponent,
    ScoresComponent,
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatToolbarModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatMenuModule,
        MatSelectModule,
        MatTooltipModule,
        MatPaginatorModule,
        FormsModule,
        MatSelectModule,
        DashboardRoutingModule,
        TableModule,
    ],

    exports: [
    ]
})
export class DashboardModule { }
