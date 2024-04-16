import {Score} from "./Score";

export interface showMatch {
    id: number;
    teamId1: number;
    teamId2: number;
    score: Score
    winnerTeamId: String;
    team1Name: string;
    team2Name: string;
}
