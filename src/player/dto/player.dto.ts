import { ApiProperty } from "@nestjs/swagger";

export class PlayerDTO {
    @ApiProperty()
    xuid: string;

    @ApiProperty()
    username: string;
}
