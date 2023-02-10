import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import user from "./src/routes/users.routes";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@foro.qsnmtcl.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((res) => {
    console.log("[MongoDB]: connected");
  })
  .catch((err) => console.error(err));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", user);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
