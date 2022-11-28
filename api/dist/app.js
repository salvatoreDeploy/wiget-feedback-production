"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT_DEV = "3333";
server_1.app.listen(process.env.PORT || PORT_DEV, () => console.log("Server Running port:", process.env.PORT || PORT_DEV));
