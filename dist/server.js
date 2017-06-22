"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use('/', (req, res) => {
    res.send('Hello, world!');
});
exports.default = app;
//# sourceMappingURL=server.js.map