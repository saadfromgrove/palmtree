import express from "express";
import cors from "cors";
import env from "./config/env.config";
import dns from "dns";

import { connectToDB } from "./config/db.config";

const app = express();
const PORT = env.PORT;

dns.setServers(["8.8.8.8", "1.1.1.1"]);

app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);

const server = async () => {
  await connectToDB();

  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
};

server();
