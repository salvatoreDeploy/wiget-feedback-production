import express from "express";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* app.post("/teste", (req, res) => {
  return res.send("Hello Word");
}); */

export { app };
