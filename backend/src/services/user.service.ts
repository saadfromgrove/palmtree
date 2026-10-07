/* backend\src\services\user.service.ts */

// Import model to interact with fields and classes from mongo database
import User, { UserType } from "../models/User";

// Service to sync clerk user (founder) to mongo database
export const registerFounderAccount = async (
  clerkId: string,
  name: string,
  email: string,
  profilePicture: string,
  userType: UserType,
  contact: string,
  aadharCard: number,
) => {
  const existingUser = await User.findOne({ clerkId }); // Check if user account already exists to avoid duplicates account

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

  // Sync founder account to mongo database
  const founder = await User.create({
    clerkId,
    name,
    email,
    profilePicture,
    userType,
    contact,
    aadharCard,
  });

  return founder;
};
