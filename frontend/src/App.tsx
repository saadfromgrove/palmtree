import { Show, SignInButton, SignOutButton } from "@clerk/react";

const App = () => {
  return (
    <div>
      <Show when={"signed-out"}>
        <SignInButton>Login</SignInButton>
      </Show>
      <Show when={"signed-in"}>
        <SignOutButton>Logout</SignOutButton>
      </Show>
    </div>
  );
};

export default App;
