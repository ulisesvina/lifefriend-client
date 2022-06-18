import { useUser } from "@auth0/nextjs-auth0";
import Login from "../components/Login";

const Home = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container">
      {user && (
        <>
          <p>Welcome, {user.name}! You are logged in.</p>
        </>
      )}
      {!user && !isLoading && <Login />}
    </div>
  );
};

export default Home;
