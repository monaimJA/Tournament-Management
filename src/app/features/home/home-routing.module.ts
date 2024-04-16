import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "../../app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home.component";
import {LatestMatchesComponent} from "./latest-matches/latest-matches.component";
import {TournamentsComponent} from "../dashboard/tournament/tournaments/tournaments.component";
import {TournamentHomeComponent} from "./tournament/tournament-home/tournament-home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {
    path:'latest-matches',component:LatestMatchesComponent
  },
  {
    path:'tournaments',component:TournamentHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
