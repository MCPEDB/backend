import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("ratings")
@Controller("ratings")
export class RatingsController {
    @Post()
    async addRating() {
        return "add";
    }
}
