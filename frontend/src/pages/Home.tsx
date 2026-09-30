import { useUser } from "@clerk/react";
import AuthButton from "../_components/signin";

const Home = () => {
  const { user } = useUser();

  return (
    <div>
      <AuthButton />
      {user ? <span>{user.fullName}</span> : <span>No user</span>}
    </div>
  );
};

export default Home;
