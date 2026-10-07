/* backend\src\controllers\user.controller.ts */

// Import all services as one object
import * as userServices from "../services/user.service";

// Import Request and Response classes from express
import { Request, Response } from "express";

/*
    Register founder account using Clerk (Google OAuth 2.0) and sync to Mongo database
    
    Method: POST
    Endpoint: /api/user/founder/signup
    Header: None
    Authentication: Not Required
*/
export const registerFounderAccountController = async (
  req: Request,
  res: Response,
) => {
  const {
    clerkId,
    name,
    email,
    profilePicture,
    userType,
    contact,
    aadharCard,
  } = req.body;

  try {
    const founder = await userServices.registerFounderAccount(
      clerkId,
      name,
      email,
      profilePicture,
      userType,
      contact,
      aadharCard,
    );

    res.status(201).json({
      success: true,
      message: `Dear ${founder.name} a warm welcome to the PalmTree family.`,
      founder,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
