// Import Router class from express
import { Router } from "express";

// Import custom routers (API Endpoints)
import userRouter from "../routes/user.route";
import healthRouter from "../routes/health-check.route";

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/health", healthRouter);

export default mainRouter;
