import { useState } from "react";
import { useAuth, useClerk } from "@clerk/react";
import { useSignIn } from "@clerk/react/legacy";

export default function AuthButton() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const { signIn } = useSignIn();
  const [busy, setBusy] = useState(false);

  // Clerk needs a moment to read the session. Render a placeholder so the
  // button does not flash "Login" for a user who is already logged in.
  if (!isLoaded) {
    return <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />;
  }

  const handleLogin = async () => {
    if (!signIn) return;
    setBusy(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback", // where Google sends the user back first
        redirectUrlComplete: "/", // where they land after login succeeds
      });
    } catch (err) {
      console.error("Google sign in failed", err);
      setBusy(false);
    }
  };

  const handleLogout = async () => {
    setBusy(true);
    try {
      await signOut({ redirectUrl: "/" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={isSignedIn ? handleLogout : handleLogin}
      disabled={busy}
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {busy ? "Please wait..." : isSignedIn ? "Logout" : "Login with Google"}
    </button>
  );
}
