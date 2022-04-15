import { ApiProperty } from "@nestjs/swagger";
import { PlayerDTO } from "./player.dto";
import { ServerDTO } from "./server.dto";
import { SkinDataDTO } from "./skin_data.dto";

export class UpdatePlayerDTO {
    @ApiProperty()
    player: PlayerDTO;

    @ApiProperty()
    server: ServerDTO;

    @ApiProperty()
    skinData: SkinDataDTO;
}
