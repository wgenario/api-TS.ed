"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const path_1 = require("path");
let Server = class Server extends common_1.ServerLoader {
    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    $onMountingMiddlewares() {
        const cookieParser = require("cookie-parser"), bodyParser = require("body-parser"), compress = require("compression"), methodOverride = require("method-override");
        this.use(common_1.GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true,
        }));
        return null;
    }
    $onReady() {
        console.log("Server started...");
    }
    $onServerInitError(err) {
        console.error(err);
    }
};
Server = __decorate([
    common_1.ServerSettings({
        rootDir: path_1.default.resolve(__dirname),
        acceptMimes: ["application/json"],
    })
], Server);
exports.Server = Server;
new Server().start();
//# sourceMappingURL=server.js.map