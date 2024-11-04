import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import todoRoutes from "./routes/todoRoutes";
import formRoutes from "./routes/formRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
