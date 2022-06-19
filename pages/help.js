export const getServerSideProps = async () => {
  const diseases = await fetch(
    "https://lifefriend.tech/api/medical/fetchAll"
  ).then((response) => response.json());

  return { props: { diseases } };
};

const Help = ({ diseases }) => {
  return (
    <div className="container">
      <h1 className="text-5xl">
        <b>Medical Help</b>
      </h1>
      <div className="mt-5">
        <h2 className="text-2xl">
          Common diseases
        </h2>
        {diseases.map((disease) => (
          <div className="m-5 bg-main text-dark w-full p-5 rounded-3xl">
            <h1 className="text-2xl"><b>{disease.name}</b></h1>
            <p className="text-md">{disease.description}</p>
            <p className="text-sm mt-5"><b>Symptoms</b> {disease.symptoms}</p>
            <p className="text-sm mt-1"><b>Treatments:</b> {disease.treatment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
