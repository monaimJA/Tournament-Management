
export interface TeamDto {
    id: number;
    name: string;
    site: { id: number; name: string };
    statusTeam: string;
    players: any[];
    tournament: any;
}