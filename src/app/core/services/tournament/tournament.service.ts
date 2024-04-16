import { Inject, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tournament} from "../../models/Tournament";


@Injectable()
export class TournamentService {

  private backendHost : string = '';
  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string) {
this.setApiUrl(apiUrl+"/tournament")
}
setApiUrl(apiUrl: string): void {
this.backendHost = apiUrl;
}

  public createTournament(label: string, startDate: Date, endDate: Date){
    let data={label, startDate, endDate }
    return this.http.post(this.backendHost+"/create",data);
  }
  public getTournaments():Observable<Array<Tournament>>{
    return this.http.get<Array<Tournament>>(this.backendHost+"/all")
  }
  public getTournament(tournamentId : number):Observable<Tournament>{
    return this.http.get<Tournament>(this.backendHost+"/"+tournamentId);
  }
  public updateTournament(id: number, updatedTournament: Tournament): Observable<Tournament> {
    return this.http.patch<Tournament>(`${this.backendHost}/${id}`, updatedTournament);
  }
  addTeamToTournament(tournamentId: number, teamId: number): Observable<Tournament> {
    return this.http.post<Tournament>(`${this.backendHost}/${tournamentId}/teams/${teamId}/add`, null);
  }
  deleteTeamFromTournament(tournamentId: number, teamId: number): Observable<Tournament> {
    return this.http.post<Tournament>(`${this.backendHost}/${tournamentId}/teams/${teamId}/delete`, null);
  }
  tournamentScorers(tournamentId: number): Observable<any> {
    return this.http.get<any>(`${this.backendHost}/${tournamentId}/scorers`);
  }
  deleteTournament(id: number): Observable<any> {
    return this.http.delete(this.backendHost+"/delete/" + id);
  }
  changeTournamentStatus(tournamentId : number) : Observable<Array<Tournament>>{
    return this.http.get<any>(this.backendHost+"/changeStatus/"+tournamentId);
  }
}
