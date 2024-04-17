import { Component } from '@angular/core';
import {MatchService} from "../../../core/services/match/match.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {
  matches:any= [];

  displayedColumns: string[] = ['team1', 'team2', 'score1', 'score2', 'winner','phase','actions'];

  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
    this.getMatches();
    this.updateAllWinners();
  }
  getMatches():void{
    this.matchService.getMatchesInCurrentTournament().subscribe((match:any[])=>{
        this.matches=match;
      },
      (error)=>{
        console.log(error)
      })
  }
  updateAllWinners(): void {
    this.matches.forEach((match: { nameWinnerTeam: string; }) => {
      match.nameWinnerTeam = this.calculateWinner(match);
    });
  }

  updateWinner(match:any): void {
    debugger;
    match.nameWinnerTeam = this.calculateWinner(match);

  }

  calculateWinner(match:any): string {
    if (match.scoreTeam1 > match.scoreTeam2) {
      match.winnerTeamId=match.team1Id;
      return match.team1Name;
    } else if (match.scoreTeam1 < match.scoreTeam2) {
      match.winnerTeamId=match.team2Id;
      return match.team2Name;
    } else {
      return match.nameWinnerTeam;
    }
  }

  saveMatch(match:any): void {
    this.matchService.saveMatchWithScore(match.matchId,match).subscribe(()=>{
      console.log("Match has been saved successfully")
      this.getMatches();
    },(error)=>{
      console.log(error);
    })
  }
}
