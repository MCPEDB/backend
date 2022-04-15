import { Injectable } from "@nestjs/common";
import { UpdatePlayerDTO } from "./dto/update_player.dto";
import { SkinData } from "./types/skin_data.type";

@Injectable()
export class PlayerService {
    constructor() {}

    async isPlayerOnServer(
        username: string,
        ip: string,
        port: number,
    ): Promise<boolean> {
        // TODO: Query the server
        const players = [];

        return players.includes(username);
    }

    async doesXuidMatchUsername(username: string, xuid: string) {}

    async updatePlayer(username: string, xuid: string, skinData: SkinData) {}

    async getUserData(username: string) {}

    async getUserDataByXUID(xuid: string) {}
}
