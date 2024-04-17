import {Component} from '@angular/core';
import {MatchService} from "../../../core/services/match/match.service";

@Component({
  selector: 'app-latest-matches',
  templateUrl: './latest-matches.component.html',
  styleUrls: ['./latest-matches.component.css']
})
export class LatestMatchesComponent {

    matches!: any[];

    constructor(private matchService: MatchService) { }

    ngOnInit(): void {
        this.getAllMatches();
    }

    getAllMatches(): void {
        this.matchService.getLatestMatchesInCurrentTournament()
            .subscribe(matches => this.matches = matches);
        console.log(this.matches);
    }

}
