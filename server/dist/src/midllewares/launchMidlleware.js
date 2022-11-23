"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class launchMiddleware {
    verifyData(req, res, next) {
        const launch = req.body;
        if (!launch.mission || !launch.rocket || !launch.destination || !launch.launchDate) {
            return res.status(400).json({ error: "Required data missing for the launch!" });
        }
        //Convert to JS Date Object 
        const verifyDate = new Date(launch.launchDate);
        if (isNaN(verifyDate)) {
            return res.status(400).json({ error: "Invalid Date Format!" });
        }
        return next();
    }
}
const Middleware = new launchMiddleware();
exports.default = Middleware;
