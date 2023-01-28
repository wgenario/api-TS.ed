import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";

const platform = PlatformExpress.create(Server);
platform.listen();

module.exports = platform.app;
