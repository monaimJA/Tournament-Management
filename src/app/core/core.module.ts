import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TournamentService} from "./services/tournament/tournament.service";
import {PlayerService} from "./services/player/player.service";
import {environment} from "../../environments/environment";
import {TeamService} from "./services/team/team.service";
import {LoginService} from "./services/login/login.service";
import {MatchService} from "./services/match/match.service";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {authGuard} from "./guards/auth.guard";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    TeamService,
    LoginService,
    MatchService,
    TournamentService,
    PlayerService,
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
