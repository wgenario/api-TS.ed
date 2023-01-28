// import { $log, PlatformBuilder } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";

const platform = PlatformExpress.create(Server);
platform.listen();

// async function bootstrap() {
//   try {
//     var platforme = await PlatformExpress.bootstrap(Server);
//     platform.app.use(express.static("public"));
//     await platform.listen();

//     process.on("SIGINT", () => {
//       platform?.stop();
//     });
//   } catch (error) {
//     $log.error({ event: "SERVER_BOOTSTRAP_ERROR", message: error.message, stack: error.stack });
//   }
// }

// bootstrap();
console.log("Server started");
module.exports = platform.app;
