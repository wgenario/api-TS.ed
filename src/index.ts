import { $log, PlatformBuilder } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Application } from "express-serve-static-core";
import { Server } from "./Server";

let platform: PlatformBuilder<Application> | undefined;

PlatformExpress.bootstrap(Server).then((platform) => {
  platform
    .listen()
    .then(() => {
      $log.info("Server initialized");
    })
    .catch((err) => {
      $log.error(err);
      process.exit(1);
    });
});

module.exports = platform;
