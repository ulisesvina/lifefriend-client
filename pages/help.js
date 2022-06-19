import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = async () => {
  const diseases = await fetch(
    "https://lifefriend.tech/api/medical/fetchAll"
  ).then((response) => response.json());

  return { props: { diseases } };
};

export default withPageAuthRequired(({ diseases }) => {
  return (
    <div className="container">
      <h1 className="text-5xl">
        <b>Medical Help</b>
      </h1>
      <div className="mt-10">
        <h2 className="text-2xl mb-5">
          Nearby Hospitals
        </h2>
        <iframe
          width={"100%"}
          height={450}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCQ-2bhypM9mEoFbYNIC4S3u7OAA9tjusY&q=hospital`}
        ></iframe>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl mb-5">
          Common diseases
        </h2>
        {diseases.map((disease) => (
          <div className="mb-5 bg-main text-dark w-full p-5 rounded-3xl">
            <h1 className="text-2xl"><b>{disease.name}</b></h1>
            <p className="text-md">{disease.description}</p>
            <p className="text-sm mt-5"><b>Symptoms</b> {disease.symptoms}</p>
            <p className="text-sm mt-1"><b>Treatments:</b> {disease.treatment}</p>
          </div>
        ))}
      </div>
    </div>
  );
});