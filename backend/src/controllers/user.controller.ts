/* backend\src\controllers\user.controller.ts */

// Import all services as one object
import { getAuth } from "@clerk/express";
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

/*
    Delete unverified user account from Mongo database as well as Clerk 
    
    Method: DELETE
    Endpoint: /api/user/delete
    Header: Authorization
    Authentication: Required
*/
export const deleteUnverifiedUserAccountController = async (
  req: Request,
  res: Response,
) => {
  // Only for backend development testing
  /*
    const { clerkId } = req.body;
    if (!clerkId) {
      return res.status(403).json({
        error: "Unauthorized: Please login before deleting the account.",
      });
    }
  */

  try {
    // For actual production purpose
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({
        error: "Unauthorized: Please login before deleting the account.",
      });
    }

    const message = await userServices.deleteUnverifiedUserAccount(userId);
    res.status(200).json({
      success: true,
      message,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/*
    Update verified user account and save to Mongo database
    
    Method: PUT
    Endpoint: /api/user/update
    Header: Authorization
    Authentication: Required
*/
export const updateVerifiedUserAccountController = async (
  req: Request,
  res: Response,
) => {
  // Only for backend development testing
  /*
    const { clerkId } = req.body;
    if (!clerkId) {
      return res.status(403).json({
        error: "Unauthorized: Please login before deleting the account.",
      });
    }
  */

  const { contact, aadharCard, profilePicture } = req.body;

  try {
    // For actual production purpose
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({
        error: "Unauthorized: Please login before deleting the account.",
      });
    }

    await userServices.updateVerifiedUserAccount(
      userId,
      contact,
      aadharCard,
      profilePicture,
    );
    res.status(200).json({
      success: true,
      message: "Your account information is updated successfully.",
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
