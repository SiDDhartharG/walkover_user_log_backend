import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./router/userRouter.js";
// import userRoutes from "./router/tableRouter.js";
import cors from "cors";
import entityRouter from './router/entityRouter.js'
dotenv.config();
connectDB();

const app = express();
app.use(cors({}));
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);
// app.use("/api/table", tableRouter);
app.use("/api/entity", entityRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
