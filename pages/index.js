import { useUser } from "@auth0/nextjs-auth0";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container">
      {user && (
        <>
          <Dashboard user={user}/>
        </>
      )}
      {!user && !isLoading && <Login />}
    </div>
  );
};

export default Home;
