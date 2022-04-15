import { ServerEntity } from "../server.entity";

export class VoteEntity {
    id: number;

    username: string;

    server: ServerEntity;

    createdAt: Date;
}
