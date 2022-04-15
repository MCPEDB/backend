import { ApiProperty } from "@nestjs/swagger";

export class CreateServerDTO {
    @ApiProperty()
    ip: string;

    @ApiProperty()
    port: number;
}
