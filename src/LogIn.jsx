import axios from "axios";
import { Link } from "react-router-dom";

export default function LogIn() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const handleClick = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const response = await axios.post(`${baseUrl}/user/signin`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert(`Welcome back ${response.data.user.name}!`);
        window.location.href = "/";
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" flex flex-col space-y-8 p-4 m-5 rounded-3xl">
        <h1 className="text-[#c49358] text-5xl font-semibold text-center m-3">
          Welcome Back!
        </h1>
        <form>
          <div className="flex flex-col text-white justify-center items-center">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 bg-black border-b"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 bg-black border-b"
            />
            <h3 className="text-white m-3 ">
              Not a member yet?
              <Link to="/signup" className="decoration-white underline">
                SignUp
              </Link>
            </h3>
            <Link to="/">
              <button
                className="bg-[#896639] hover:border hover:border-[#d0bea7]
                hover:bg-black text-center hover:text-[#c49358] duration-500
                w-40 mx-auto mt-6 font-semibold px-2 py-4 rounded-lg md:mx-10"
                onClick={handleClick}
              >
                Log In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
