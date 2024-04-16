import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Card} from "../../models/Card";
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = '';

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl: string) {
    this.apiUrl = `${baseUrl}/cards`;
  }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/allcards`);
  }

  public getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`);
  }

  public createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  public updateCard(id: number, card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.apiUrl}/${id}`, card);
  }

  public deleteCard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public getCardsByMatchId(matchId: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/by-match/${matchId}`);
  }

  public getCardsByPlayerId(playerId: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/by-player/${playerId}`);
  }
  public getCardsByTournamentId(tournamentId: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/by-tournament/${tournamentId}`);
  }
}