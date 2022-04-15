import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayerModule } from './player/player.module';
import { ServerModule } from './server/server.module';

@Module({
    imports: [PlayerModule, ServerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
