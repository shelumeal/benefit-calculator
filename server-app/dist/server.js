"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const benefit_1 = __importDefault(require("./routes/benefit"));
// Fetch values from env.
dotenv_1.default.config();
// Connect to DB
(0, dbConfig_1.default)();
const port = process.env.PORT || 5001;
// Configure express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:8080",
    credentials: true,
}));
// Routes
app.use("/api/", benefit_1.default);
app.listen(port, () => {
    console.log(`Server started successfully on port :${port}`);
});
