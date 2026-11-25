import express from "express";
import routes from "./routes/index.js";
import requestLogger from "./middlewares/requestLogger.middlware.js";

const app = express();

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(requestLogger);

// Application routes
app.use("/api/v1", routes);

export default app;
