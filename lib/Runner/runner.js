"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const cli_1 = __importDefault(require("@wdio/cli"));
class Runner {
    constructor() {
        this.wdio = "wdio.conf.js";
    }
    wdioRun() {
        const wdio = new cli_1.default(this.wdio);
        wdio.run().then((code) => {
            process.exit(0);
        }, (error) => {
            console.error('Launcher failed to start the test', error.stacktrace);
            process.exit(1);
        });
    }
}
exports.Runner = Runner;
const runner = new Runner();
runner.wdioRun();
