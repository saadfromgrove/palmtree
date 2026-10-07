/* backend\src\routes\user.route.ts */

// Import Router class from express
import { Router } from "express";

// Import all controllers as one object
import * as controllers from "../controllers/user.controller";

const userRouter = Router();

userRouter.post(
  "/founder/signup",
  controllers.registerFounderAccountController,
);
userRouter.delete("/delete", controllers.deleteUnverifiedUserAccountController);

export default userRouter;
