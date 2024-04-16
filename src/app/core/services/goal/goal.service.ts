import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Goal} from "../../models/Goal";
import {Card} from "../../models/Card";
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = '';

  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl: string) {
    this.apiUrl = `${baseUrl}/goals`;
  }

  public getCards(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.apiUrl}/allcards`);
  }

  public getCardById(id: number): Observable<Goal> {
    return this.http.get<Goal>(`${this.apiUrl}/${id}`);
  }

  public createCard(card: Goal): Observable<Goal> {
    // make sure the Goal model is matching the Goal Dto from the web server
    return this.http.post<Goal>(this.apiUrl, card);
  }

  public updateCard(id: number, card: Goal): Observable<Goal> {
      return this.http.put<Goal>(`${this.apiUrl}/${id}`, card);
  }

  public deleteCard(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
