import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { PlayerDto } from '../../models/PlayerDto';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrlBack: string = '';

  constructor(private http: HttpClient,
              @Inject('API_URL') private apiUrl: string) {
    this.setApiUrl(apiUrl+"/player")
  }
  setApiUrl(apiUrl: string): void {
    this.apiUrlBack = apiUrl;
  }
  getAllPlayersOfATeam(teamId: number): Observable<PlayerDto[]> {
    return this.http.get<PlayerDto[]>(`${this.apiUrlBack}/team/${teamId}/players`);
  }

  getPlayerById(playerId: number): Observable<PlayerDto> {
    return this.http.get<PlayerDto>(`${this.apiUrl}/${playerId}`);
  }

  assignPlayerToTeam(player: PlayerDto, teamId: number): Observable<PlayerDto> {
    return this.http.post<PlayerDto>(`${this.apiUrl}/team/${teamId}`, player);
  }

  deletePlayerByIdFromTeam(playerId: number, teamId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${playerId}/team/${teamId}`);
  }

  updatePlayerById(playerId: number, player: PlayerDto): Observable<PlayerDto> {
    return this.http.put<PlayerDto>(`${this.apiUrl}/${playerId}`, player);
  }

  getPlayersInTournoiByCardType(cardType: string, tournoiId: number): Observable<PlayerDto[]> {
    return this.http.get<PlayerDto[]>(`${this.apiUrl}/tournoi/${tournoiId}?cardType=${cardType}`);
  }

  getPlayersInMatchByCardType(cardType: string, matchId: number): Observable<PlayerDto[]> {
    return this.http.get<PlayerDto[]>(`${this.apiUrl}/match/${matchId}?cardType=${cardType}`);
  }

  notifyPlayers(tournamentId: number, statusTournamentAndMatch: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlBack}/changeStatus/${tournamentId}?statusTournamentAndMatch=${statusTournamentAndMatch}`);
  }
}
