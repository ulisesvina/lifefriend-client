import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(_ => {
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const { user } = useUser();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude + Math.random();
        const lng = position.coords.longitude + Math.random();
        setCoords({ lat, lng });
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target,
      data = {
        title: form.title.value,
        content: form.content.value,
        location: coords.lat + ",%20" + coords.lng,
        email: user.email,
        image: ""
      };

      fetch("api/crud/createReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => res.json()).then(data => {
        if(data.success) {
          window.location.replace("https://www.lifefriend.tech/emergencies"); 
        }
      })
  };

  return (
    <>
      <div className="container">
        <h1 className="text-5xl mb-10 inline">
          <b>New Emergency</b>
        </h1>
        <Link className="inline" href="/emergencies">
          <button className="m-5 text-xl bg-accent text-white font-bold py-2 px-4 rounded-2xl">
            Back
          </button>
        </Link>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="content">
                <div className="flex align-items">
                  Content
                  <span className="ml-auto opacity-75">
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                type="text"
                name="content"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />

              <div className="flex justify-end py-4">
                <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-xl text-white py-2 px-4 rounded-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-10">
          <h2 className="text-2xl mb-5">Map</h2>
          <iframe
            width={"100%"}
            height={450}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ-2bhypM9mEoFbYNIC4S3u7OAA9tjusY&q=${
              coords.lat + ",%20" + coords.lng
            }`}
          ></iframe>
        </div>
      </div>
    </>
  );
});