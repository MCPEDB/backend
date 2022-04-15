import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateServerDTO } from "./dto/create_server.dto";

@ApiTags("server")
@Controller("server")
export class ServerController {
    @Post()
    async addServer(@Body() { ip, port }: CreateServerDTO) {
        return "add";
    }

    @Get("/:id")
    async getServer() {
        return "get";
    }
}
