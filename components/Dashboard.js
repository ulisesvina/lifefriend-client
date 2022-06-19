import { useEffect, useState } from "react";

const Dashboard = ({ user }) => {
  const [date, setDate] = useState(Date.now());

  const fetchDate = async () => {
    const data = await fetch("/api/crud/fetchLastUpdatedDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email
      }),
    }).then(res => res.json());
    setDate(data.date);
  }

  useEffect(() => {
    fetch("/api/crud/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email
      })
    });

    fetchDate();
  }, []);

  return (
    <div className="container">
      <div className="lg:flex lg:justify-evenly">
        <div className="inline-block">
          <img src={user.picture.substring(0, 85) + "1024"} width={100} className="rounded-full mr-5" alt="Profile Picture"/>
        </div>
        <div className="inline-block mr-5">
          <h1 className="text-2xl">
            Welcome back, <br />
            <span className="text-3xl">
              <b>{user.name}</b>
            </span>
            !
          </h1>
        </div>
        <div className="inline-block mt-5">
          <button className="text-xl bg-red text-white font-bold py-2 px-4 rounded-2xl">
            Emergency
          </button>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm">
          <b>Reminder:</b> Your medical profile needs to be updated every 6
          months.
        </p>
        <p className="text-lg">
          <b>Last update was on</b> {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
