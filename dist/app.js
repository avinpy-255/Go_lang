"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const supeRoutes_1 = __importDefault(require("./routes/supeRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./errorHandler");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const mongoURI = process.env.MONGODB;
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
if (!mongoURI) {
    throw new Error("URI is not Provided");
}
// Connect to MongoDB
mongoose_1.default.connect(mongoURI)
    .then(() => {
    console.log("MongoDB Connected...");
})
    .catch((err) => {
    console.error();
});
app.use(express_1.default.json());
app.use((0, clerk_sdk_node_1.ClerkExpressWithAuth)({}));
// Routes
app.use("/supe", supeRoutes_1.default);
app.use("/admin", adminRoutes_1.default);
app.use("/user", userRoutes_1.default);
// Error Handler
app.use(errorHandler_1.errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
