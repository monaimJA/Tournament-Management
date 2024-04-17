import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayersComponent} from "./players/players.component";
import {TournamentsComponent} from "./tournament/tournaments/tournaments.component";
import {authGuard} from "../../core/guards/auth.guard";
import {ScoresComponent} from "./scores/scores.component";
import {TeamListComponent} from "./team/team-list/team-list.component";

const routes: Routes = [
  {path:'players',component:PlayersComponent,canActivate:[authGuard]},
  {path:'tournament',component:TournamentsComponent,canActivate:[authGuard]},
  {path:'scores',component:ScoresComponent,canActivate:[authGuard]},
    {path:'teams',component:TeamListComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
