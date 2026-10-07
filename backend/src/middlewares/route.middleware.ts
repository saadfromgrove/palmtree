// Import Router class from express
import { Router } from "express";

// Import custom routers (API Endpoints)
import userRouter from "../routes/user.route";

const mainRouter = Router();

mainRouter.use("/user", userRouter);

export default mainRouter;
