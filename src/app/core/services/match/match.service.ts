import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatchDto} from "../../models/MatchDto";
import {Match} from "../../models/Match";
import {Score} from "../../models/Score";
import {Player} from "../../models/Player";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

private apiUrlBack: string ='';

  constructor(private http: HttpClient,
              @Inject('API_URL') private apiUrlFromInjection: string ) {

  }
  setApiUrl(apiUrl: string): void {
    this.apiUrlBack = apiUrl;
  }

  createMatch(matchDto: MatchDto): Observable<Match> {
    return this.http.post<Match>(`${this.apiUrlBack}/create`, matchDto);
  }

  setScoreOfMatch(score: Score, matchId: number): Observable<Match> {
    return this.http.post<Match>(`${this.apiUrlBack}/score/${matchId}`, score);
  }

  setTeamForfaitInMatch(teamId: number, matchId: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrlBack}/${matchId}/team/${teamId}/forfait`);
  }

  getAllMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrlBack}/getAll`);
  }

  getMatchById(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrlBack}/${id}`);
  }

  getMatchScore(id: number): Observable<Score> {
    return this.http.get<Score>(`${this.apiUrlBack}/${id}/score`);
  }

  getMatchScorers(id: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrlBack}/${id}/scorers`);
  }
}
