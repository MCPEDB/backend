import { Controller, Get, Patch, Post, Version } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("player")
@Controller('player')
export class PlayerController {
    constructor() {}

    @Version("1")
    @ApiForbiddenResponse({ description: 'You do not have permission to perform this action.' })
    @Get()
    getPlayers() {
        return "get";
    }

    @Version("1")
    @ApiCreatedResponse({ description: 'The record has been successfully created.' })
    @ApiForbiddenResponse({ description: 'You do not have permission to perform this action.' })
    @Post()
    createPlayer() {
        return "create";
    }

    @Version("1")
    @ApiCreatedResponse({ description: 'The record has been successfully created.' })
    @ApiForbiddenResponse({ description: 'You do not have permission to perform this action.' })
    @Patch()
    updatePlayer() {
        return "update";
    }
}
