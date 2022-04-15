import { Version, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableVersioning({
      type: VersioningType.URI,
    })

    const config = new DocumentBuilder()
      .setTitle("MCPEDB")
      .setDescription("The MCPEDB API")
      .setVersion("1.0.0")
      .build()
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}

bootstrap();