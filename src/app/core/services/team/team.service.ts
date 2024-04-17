import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Site, Team} from '../../models/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private backendHost : string = '';
  constructor(private http: HttpClient,
              @Inject('API_URL') private apiUrl: string) {
    this.setApiUrl(apiUrl)
  }
  setApiUrl(apiUrl: string): void {
    this.backendHost = apiUrl;
  }

    public getTeamsIntournament(id: number) : Observable<Array<Team>>{
        return this.http.get<Array<Team>>(this.backendHost+"/team/tournoi/"+id);
    }
    public getAllTeams() : Observable<Array<Team>>{
        return this.http.get<Array<Team>>(this.backendHost+"/team/all");
    }
    public inscription(team :Team) : Observable<Team>{
        return this.http.post<Team>(this.backendHost+"/inscription",team);
    }
    public getTeamById(id: number): Observable<Team> {
        return this.http.get<Team>(this.backendHost+"/team/"+id);
    }
    public updateStatus(id: number, team: Team): Observable<Team> {
        return this.http.put<Team>(this.backendHost+"/team/"+id,team);
    }

    public getSites(): Observable<Site[]> {
        return this.http.get<Site[]>(this.backendHost+"/site/all");
    }
}
