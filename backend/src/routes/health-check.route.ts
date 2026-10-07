/* backend\src\routes\health-check.route.ts */

// Import Router class from express
import { Request, Response, Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, status: "ONLINE" });
  } catch (error: any) {
    return res.status(502).json({ success: false, status: "OFFLINE" });
  }
});

export default healthRouter;
