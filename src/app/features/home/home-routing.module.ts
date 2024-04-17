import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LatestMatchesComponent} from "./latest-matches/latest-matches.component";
import {TournamentHomeComponent} from "./tournament/tournament-home/tournament-home.component";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [

    {   path:'',component:TournamentHomeComponent},
    {   path: 'login',component:LoginComponent},
    {
        path:'latest-matches',component:LatestMatchesComponent
    },
    {
        path:'inscription',component:InscriptionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
