import { getSession } from "@auth0/nextjs-auth0";
import { useRef, useState } from "react";
import { Widget } from "@uploadcare/react-widget";
import Image from "next/image";
import doge from "../public/img/doge.png";

export const getServerSideProps = async (ctx) => {
  const session = getSession(ctx.req, ctx.res);

  const url = !!process.env.DEV
    ? "http://localhost:3000/api/crud/fetchDocsByUser"
    : "https://lifefriend.tech/api/crud/fetchDocsByUser";

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
    props: { resp, user: JSON.parse(JSON.stringify(session.user)) },
  };
};

const Documents = ({ resp, user }) => {
  const { docs } = resp;
  const select = useRef(null);
  const divSel = useRef(null);
  const divWidget = useRef(null);
  const [selected, setSelected] = useState(null);
  const [firstStage, setFirstStage] = useState(false);

  const handleBtnClick = () => {
    setSelected(select.current.value);
    setFirstStage(true);
  };

  const getStringType = (intType) => {
    let type;
    switch (intType) {
      case 1:
        type = "Birth Certificate";
        break;
      case 2:
        type = "Vaccination Card";
        break;
      case 3:
        type = "Insurance";
        break;
    }
    return type;
  };

  const handleChangeWidget = (e) => {
    let type;
    switch (selected) {
      case "birthcert":
        type = 1;
        break;
      case "vaxcard":
        type = 2;
        break;
      case "insurance":
        type = 3;
        break;
    }
    fetch("/api/crud/uploadDoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        type,
        file: e.cdnUrl,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          window.location.reload(false);
        } else {
          console.log(data);
        }
      });
  };

  return (
    <div className="container">
      <h1 className="text-5xl">
        <b>Documents</b>
      </h1>
      <div className="mt-10">
        {docs.length < 3 ? (
          <>
            <div className="flex justify-center items-center">
              <Image src={doge} width={43 + "px"} height={49.4 + "px"} />
              <span className="ml-3 text-xl">
                <b>Wow! Such empty</b>
              </span>
            </div>
            <div className="mt-10">
              <p className="text-3xl">
                To get started, complete your medical history by uploading all
                the files required.
              </p>
              <div
                className={`mt-5 ${firstStage ? "hidden" : ""}`}
                ref={divSel}
              >
                <label htmlFor="docType">Document type:</label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="docType"
                  id="docType"
                  ref={select}
                >
                  <option value="birthcert">Birth Certificate</option>
                  <option value="vaxcard">Vaccination Card</option>
                  <option value="insurance">Insurance</option>
                </select>
                <button
                  className="text-md bg-accent text-white py-2 px-4 rounded-xl mt-3"
                  onClick={handleBtnClick}
                >
                  Go
                </button>
              </div>
              <div
                className={`mt-5 ${firstStage ? "" : "hidden"}`}
                ref={divWidget}
              >
                <span className="text-red">Only images are allowed</span>
                <br />
                <label htmlFor="file">Your file:</label>{" "}
                <Widget
                  onChange={handleChangeWidget}
                  publicKey="88e2bad475a9b5f99575"
                  id="file"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="mt-1 text-xl">Click on a document to view it.</p>
            <div className="flex flex-wrap mt-5">
              {docs.map((doc) => (
                <a href={doc.file} target="_blank" rel="noopener noreferrer">
                  <div className="m-3 bg-main text-dark p-5 rounded-3xl">
                    <h1 className="text-2xl">
                      <b>{getStringType(doc.type)}</b>
                    </h1>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Documents;
