import express from "express";
import cors from "cors";
import env from "./config/env.config";

const app = express();
const PORT = env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
