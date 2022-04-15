import { ApiProperty } from "@nestjs/swagger";
import { SkinData } from "../types/skin_data.type";

export class SkinDataDTO implements SkinData {
    @ApiProperty()
    data: string;

    @ApiProperty()
    geometryData: string;
}
