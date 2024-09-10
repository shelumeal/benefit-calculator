import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import benefit from './routes/benefit';

// Fetch values from env.
dotenv.config();

// Connect to DB
connectDb();

const port = process.env.PORT || 5001;

// Configure express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

// Routes
app.use("/api/", benefit);


app.listen(port, () => {
  console.log(`Server started successfully on port :${port}`);
});
