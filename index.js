import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/", cardRoutes);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
