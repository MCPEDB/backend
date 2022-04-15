import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayerModule } from "./player/player.module";
import { ServerModule } from "./server/server.module";
import { RatingsModule } from "./server/ratings/ratings.module";
import { VotesModule } from "./server/votes/votes.module";

@Module({
    imports: [PlayerModule, ServerModule, RatingsModule, VotesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
