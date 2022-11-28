"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const feedbacks_routes_1 = require("./feedbacks.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/feedbacks", feedbacks_routes_1.feedBackRoutes);
