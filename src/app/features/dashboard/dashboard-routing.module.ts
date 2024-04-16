import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayersComponent} from "./players/players.component";
import {TournamentsComponent} from "./tournament/tournaments/tournaments.component";
import {authGuard} from "../../core/guards/auth.guard";
import {ScoresComponent} from "./scores/scores.component";

const routes: Routes = [
  {path:'players',component:PlayersComponent},
  {path:'tournament',component:TournamentsComponent},
  {path:'scores',component:ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
