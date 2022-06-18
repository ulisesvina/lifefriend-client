const Login = () => {
  return (
    <div className="flex h-80">
      <div className="m-auto items-center">
        <h2 className="text-6xl">
          Get started with{" "}
          <span className="gradient-text">your health care suite.</span>
        </h2>
        <br />
        <div className="flex flex-col items-center justify-center mt-10">
          <a href="/api/auth/login">
            <button className="text-3xl bg-accent text-white font-bold py-2 px-4 rounded">
              Log in or register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
