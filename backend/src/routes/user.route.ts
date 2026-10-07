/* backend\src\routes\user.route.ts */

// Import Router class from express
import { Router } from "express";

// Import all controllers as one object
import * as controllers from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/existence", controllers.checkUserExistenceController);

userRouter.post(
  "/founder/signup",
  controllers.registerFounderAccountController,
);

userRouter.put("/update", controllers.updateVerifiedUserAccountController);

userRouter.delete("/delete", controllers.deleteUnverifiedUserAccountController);

export default userRouter;
