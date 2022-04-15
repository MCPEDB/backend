import { ApiProperty } from "@nestjs/swagger";

export class ServerDTO {
    @ApiProperty()
    ip: string;

    @ApiProperty()
    port: number;
}
