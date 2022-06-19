import { useEffect } from "react";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import doge from "../public/img/doge.png";

export const getServerSideProps = async (ctx) => {
  const session = getSession(ctx.req, ctx.res);

  const url = !!process.env.DEV ? "http://localhost:3000/api/crud/fetchDocsByUser" : "https://lifefriend.tech/api/crud/fetchDocsByUser"

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: session.email,
    }),
  }).then((res) => res.json());

  return {
    props: { resp },
  };
};

const Documents = ({ resp }) => {
  const { docs } = resp;

  return (
    <div className="container">
      <h1 className="text-5xl">
        <b>Documents</b>
      </h1>
      <div className="mt-10">
        {docs.length == 0 ? (
          <div className="flex justify-center items-center">
            <Image
              src={doge}
              width={43 + "px"}
              height={49.4 + "px"}
            />
            <span className="ml-3 text-xl">
              <b>Wow! Such empty</b>
            </span>
          </div>
        ) : (
          docs.map((doc) => (
            <div className="m-5 bg-main text-dark w-full p-5 rounded-3xl">
              <h1 className="text-2xl">
                <b>{doc}</b>
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Documents;
