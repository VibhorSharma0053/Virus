import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/assignment/", assignmentRoutes);
// app.use("/api/sync", syncRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
