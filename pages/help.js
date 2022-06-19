export const getServerSideProps = async () => {
  const diseases = await fetch(
    "/api/medical/fetchAll"
  ).then((response) => response.json());

  return { props: { diseases } };
};

const Help = ({ diseases }) => {
  return (
    <div className="container">
      {diseases.map((disease) => (
        <div className="m-5 inline-block bg-accent p-5 rounded-3xl">
          <h1 className="text-2xl">{disease.name}</h1>
          <p className="text-sm">{disease.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Help;
