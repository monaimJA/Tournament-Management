import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import { Card } from '../../../core/models/Card';
import { Tournament } from '../../../core/models/Tournament';
import { CardService } from '../../../core/services/card/card.service';
import { TournamentService } from '../../../core/services/tournament/tournament.service';
import {PlayerService} from "../../../core/services/player/player.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] =[];
  tournaments$: Observable<Array<Tournament>>;
  selectedTournament: Tournament | null = null;

  constructor(
      private cardService: CardService,
      private tournamentService: TournamentService,
      private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.tournamentService.getTournaments().subscribe((data: Tournament[]) => {
      this.tournaments$ = of(data);
      if (data.length > 0) {
        this.selectedTournament = data[0];
        this.loadCards(this.selectedTournament);
      }
    })
    }


  loadTournaments(): void {
    this.tournaments$ = this.tournamentService.getTournaments();
  }

  onTournamentChange(tournament: Tournament): void {
    if (tournament) {
      this.selectedTournament = tournament;
      this.loadCards(tournament);
    } else {
      this.selectedTournament = null;
      this.cards = [];  // Reset cards observable
    }
  }

  loadCards(tournament: Tournament): void {
    this.cardService.getCardsByTournamentId(tournament.id).subscribe({
      next: cards => {
        this.cards = cards || [];
        console.log('cards', this.cards);
        this.cards.forEach(card => {
          this.playerService.getPlayerById(card.player_id).subscribe(player => {
            card.playerName = player.lastName;
            console.log( card.player_id + ' ' + card.playerName);
          });
        });
      },
      error: error => {
        console.error('An error occurred: ANA FL FROOOOOOOOOOONNNNNNNNT', error);
        this.cards = [];
      }
    });
  }
}
