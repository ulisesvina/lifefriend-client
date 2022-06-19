import doge from "../public/img/doge.png";
import Image from "next/image";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = async (ctx) => {
  const url = !!process.env.DEV
    ? "http://localhost:3000/api/crud/fetchReports"
    : "https://lifefriend.tech/api/crud/fetchReports";
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return {
    props: {
      reports: data.reports,
    },
  };
};

export default withPageAuthRequired(({ reports }) => {
  return (
    <div className="container">
      <h1 className="text-5xl mb-10">
        <b>Nearby Emergencies</b>
      </h1>
      <div className="inline-block mt-5">
        <h2 className="text-3xl mb-10 m-5">
          <b>Are you in danger?</b>
        </h2>
      </div>
      <Link className="inline-block mt-5" href="/newemergency">
        <button className="text-xl bg-red text-white font-bold py-2 px-4 rounded-2xl">
          Report Emergency
        </button>
      </Link>
      {reports.length === 0 ? (
        <div className="flex justify-center items-center">
          <Image src={doge} width={43 + "px"} height={49.4 + "px"} />
          <span className="ml-3 text-2xl doge">Wow! Such empty!</span>
        </div>
      ) : (
        reports.map((report) => (
          <div className="mb-5 bg-main text-dark w-full p-5 rounded-3xl">
            <h1 className="text-2xl">
              <b>{report.title}</b>
            </h1>
            <p className="text-md">{report.content}</p>
            <p className="text-xl mt-5">
              <b>Map</b>
              <iframe
                width={"100%"}
                height={300 + "px"}
                className="rounded"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ-2bhypM9mEoFbYNIC4S3u7OAA9tjusY&q=${report.location}`}
              ></iframe>
            </p>
          </div>
        ))
      )}
    </div>
  );
});