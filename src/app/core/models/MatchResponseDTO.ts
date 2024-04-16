
import {TeamDto} from "./TeamDto";

export interface MatchResponseDTO {
    id: number;
    startTime: string;
    nameTeam1: TeamDto;
    nameTeam2: TeamDto;
    goals: any[];
    nameWinnerTeam: string;
    labelTournament: string;
    statusTournamentAndMatch: string;
    namePlayersTeam1: string[];
    namePlayersTeam2: string[];
}
