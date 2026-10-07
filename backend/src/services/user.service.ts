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
