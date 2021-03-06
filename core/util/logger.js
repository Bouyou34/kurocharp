const moment = require("moment");
const chalk = require("chalk");

const toUpper = string => string.charAt(0).toUpperCase() + string.slice(1);

class logger {
    constructor() {
        throw new Error(chalk.red(`${this.constructor.name} can't be initialized.`))
    }
    static time() {
        return moment().format("HH:mm:ss");
    }

    static log(style, name, message, stacktrace) {
        if (typeof style !== "function") {
            style = chalk.white;
        }

        if (Array.isArray(message)) {
            for (const item of message) console.log(style.bold(`[${logger.time()} ${toUpper(name)}]`), style(item));
            return false;
        } else if (stacktrace) {
            console.log(style.bold(`[${logger.time()} ${toUpper(name)}]`), style(message));
            return console.trace(message);
        } else {
            message = typeof message === "string" ? message.replace(/\r?\n|\r/g, " ") : message;
            return console.log(style.bold(`[${logger.time()} ${toUpper(name)}]`), style(message));
        }
    }
    
    static success(name, message) {
        return logger.log(chalk.green, name, message);
    }

    static error(name, message, stacktrace) {
        return logger.log(chalk.red, name, message, stacktrace);
    }

    static warn(name, message) {
        return logger.log(chalk.orange, name, message);
    }

    static info(name, message) {
        return logger.log(chalk.magenta, name, message);
    }

    static fatal(name, message, stacktrace) {
        throw logger.log(chalk.bgRed.white, name, message, stacktrace);
    }
}

module.exports = logger;