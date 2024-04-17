import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatchResponseDtoInProgress} from "../../models/MatchesResponseDtoInProgress";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiUrlBack: string = '';

  constructor(private http: HttpClient,
              @Inject('API_URL') private apiUrl: string) {
    this.setApiUrl(apiUrl+"/match")
  }
  setApiUrl(apiUrl: string): void {
    this.apiUrlBack = apiUrl;
  }
  getLatestMatchesInCurrentTournament(): Observable<any[]> {
    return this.http.get<any>(this.apiUrlBack+'/in-progress/latest');
  }
  getMatchesInCurrentTournament(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrlBack}/in-progress`);
  }
  saveMatchWithScore(idMatch:number,data:MatchResponseDtoInProgress){
    return this.http.post<any>(`${this.apiUrlBack}/${idMatch}/score`,data);
  }
}
