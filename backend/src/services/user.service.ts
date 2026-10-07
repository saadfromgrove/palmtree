/* backend\src\services\user.service.ts */

// Import model to interact with fields and classes from mongo database
import { clerkClient } from "@clerk/express";
import User, { UserType } from "../models/User";

// Service to sync clerk user (founder) to mongo database
export const registerFounderAccount = async (
  clerkId: string,
  name: string,
  email: string,
  profilePicture: string,
  userType: UserType,
  contact: number,
  aadharCard: number,
) => {
  const existingUser = await User.findOne({ email }); // Check if user account already exists to avoid duplicates account

  if (existingUser) {
    // Throw error as per founder type, conditionally
    if (existingUser?.userType === "ORG_FOUNDER") {
      throw new Error(
        "Your account already exists, please login to your organization account.",
      );
    } else if (existingUser?.userType === "SERV_FOUNDER") {
      throw new Error(
        "Your account already exists, please login to your business service provider account.",
      );
    }
  }

  // Validate email address
  if (!email.includes("@"))
    throw new Error("Please enter a valid existing email address");

  // Validate user type
  if (userType !== "ORG_FOUNDER" && userType !== "SERV_FOUNDER")
    throw new Error("Please enter a valid user type for founder");

  // Validate contact number
  if (contact.toString().length != 10)
    throw new Error(
      "Please enter a valid and appropriate 10 digit Indian contact number.",
    );

  // Validate aadhar number
  if (aadharCard.toString().length !== 12)
    throw new Error(
      "Please enter a valid 12 digit verified Aadhar card number.",
    );

  // Sync founder account to mongo database
  const founder = await User.create({
    clerkId,
    name,
    email,
    profilePicture: profilePicture ? profilePicture : null, // If there is no profile picture then set it's value to null
    userType,
    contact: `+91-${contact}`, // Always save contact number as +91 in the start
    aadharCard,
  });

  return founder;
};

// Service to delete unverified user from mongo database as well as clerk
export const deleteUnverifiedUserAccount = async (clerkId: string) => {
  // Check existence of the user account
  const existingUser = await User.findOne({ clerkId });
  if (!existingUser) throw new Error("User account doesn't exist in database"); // Throw appropriate error

  // If user is verified, do not delete the account
  if (existingUser.status === true)
    throw new Error(
      "Your account is verified and cannot be deleted. Please contact PalmTree support team to delete your account.",
    );

  // Delete the account from the mongo database
  await User.deleteOne({ clerkId });

  // Delete the account from the clerk
  await clerkClient.users.deleteUser(clerkId);

  const message = "Your account was permanently deleted from the PalmTree.";
  return message;
};

// Service to update verified user and save to mongo database
export const updateVerifiedUserAccount = async (
  clerkId: string,
  contact: number,
  aadharCard: number,
  profilePicture: string,
) => {
  // Check existence of the user account
  const existingUser = await User.findOne({ clerkId });
  if (!existingUser) throw new Error("User account doesn't exist in database"); // Throw appropriate error

  // If user is verified, do not delete the account
  if (existingUser.status === false)
    throw new Error(
      "Your account is unverified and cannot be updated. Please wait until your account is approved or contact PalmTree support team.",
    );

  // Validate contact number
  if (contact.toString().length != 10)
    throw new Error(
      "Please enter a valid and appropriate 10 digit Indian contact number.",
    );

  // Validate aadhar number
  if (aadharCard.toString().length !== 12)
    throw new Error(
      "Please enter a valid 12 digit verified Aadhar card number.",
    );

  // Find by clerk ID and save updated information to mongo database
  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      contact: `+91-${contact}`,
      aadharCard,
      profilePicture: profilePicture ? profilePicture : null, // If there is no profile picture then set it's value to null
    },
  );

  return user;
};
