import { $log, PlatformBuilder } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Application } from "express-serve-static-core";
import { Server } from "./Server";

let platform: PlatformBuilder<Application> | undefined;

async function bootstrap() {
  try {
    platform = await PlatformExpress.bootstrap(Server);
    await platform.listen();

    process.on("SIGINT", () => {
      platform?.stop();
    });
  } catch (error) {
    $log.error({ event: "SERVER_BOOTSTRAP_ERROR", message: error.message, stack: error.stack });
  }
}

bootstrap();

module.exports = platform;
