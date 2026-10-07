/* backend\src\server.ts */

// Import Libraries
import express from "express";
import cors from "cors";
import dns from "dns";
import { clerkMiddleware } from "@clerk/express";

// Import custom fields and functions
import env from "./config/env.config";
import mainRouter from "./middlewares/route.middleware";
import { connectToDB } from "./config/db.config";

const PORT = env.PORT;
const app = express();

// Set Google and Cloudflare DNS to fix MongoDB connection
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);
app.use(clerkMiddleware());
app.use("/api", mainRouter);

// Server function
const server = async () => {
  await connectToDB();

  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
};

server();
