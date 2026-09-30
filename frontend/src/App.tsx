import AuthButton from "../lib/signin";
import { SignOutButton, useUser } from "@clerk/react";

const App = () => {
  const { user } = useUser();

  return (
    <div>
      <AuthButton />
    </div>
  );
};

export default App;
