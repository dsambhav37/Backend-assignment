import express from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Import Routes
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

// Routes Declaration
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

export { app };
