import { Test, TestingModule } from "@nestjs/testing";
import { RatingsController } from "../../src/server/ratings/ratings.controller";

describe("RatingsController", () => {
    let controller: RatingsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RatingsController],
        }).compile();

        controller = module.get<RatingsController>(RatingsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
