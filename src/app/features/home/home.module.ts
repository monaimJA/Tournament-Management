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
import {LoginModule} from "../../demo/components/auth/login/login.module";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {MatButtonModule} from "@angular/material/button";
import {InscriptionComponent} from "./inscription/inscription.component";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [LoginComponent, HomeComponent, TournamentHomeComponent, LatestMatchesComponent, InscriptionDialogComponent
  ,InscriptionComponent],
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
        MatIconModule,
        LoginModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        MatButtonModule,
        MatSelectModule
    ]
})
export class HomeModule { }
