import { Player } from "./player";

export interface Team{
  id: number;
  name: string;
  country: string;
  foundationDate: Date;
  coachName: string;
  logoUrl: string;
  players: Array<Player>;
}
