import { PlayerDto } from "./PlayerDto";
import { Tournament } from "./Tournament";

export interface Team {
    id:number;
    name:string;
    players :PlayerDto[] ;
    tournament :Tournament;
}

