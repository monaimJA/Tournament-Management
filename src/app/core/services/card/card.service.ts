import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../models/Card';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private apiUrlBack :string = ''; // replace with your API endpoint

    constructor(private http: HttpClient,
                @Inject('API_URL') private apiUrl: string) {
            this.setApiUrl(apiUrl+"/cards")
    }

    setApiUrl(apiUrl: string): void {
        this.apiUrlBack = apiUrl;
    }
    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.apiUrl}/allcards`);
    }

    getCard(id: number): Observable<Card> {
        return this.http.get<Card>(`${this.apiUrl}/${id}`);
    }

    createCard(card: Card): Observable<Card> {
        return this.http.post<Card>(this.apiUrl, card);
    }

    updateCard(card: Card): Observable<Card> {
        return this.http.put<Card>(`${this.apiUrl}/${card.id}`, card);
    }

    deleteCard(id: number): Observable<Card> {
        return this.http.delete<Card>(`${this.apiUrl}/${id}`);
    }

    getCardsByPlayerId(playerId: number): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.apiUrl}/by-player/${playerId}`);
    }
    getCardsByMatchId(matchId: number): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.apiUrl}/by-match/${matchId}`);
    }

    getCardsByTournamentId(tournamentId: number): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.apiUrl}/by-tournament/${tournamentId}`);
    }
}
