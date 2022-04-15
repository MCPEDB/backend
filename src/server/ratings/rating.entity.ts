import { PlayerEntity } from "src/player/player.entity";
import { ServerEntity } from "../server.entity";

export class RatingEntity {
    id: number;

    player: PlayerEntity;

    server: ServerEntity;

    message: string;

    createdAt: Date;

    updatedAt: Date;
}
