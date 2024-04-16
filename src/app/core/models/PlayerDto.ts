import { PlayerStatus } from "../enums/PlayerStatus";

export interface PlayerDto{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    playerStatus:PlayerStatus;
    teamName:string;
}