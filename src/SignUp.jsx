import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const HandleClick = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await axios.post(`${baseUrl}/user/signup`, {
      name,
      email,
      password,
    });
    try {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert(`Sign up is successful, Happy shopping ${response.data.name}!`);
        window.location.href = "/";
      } else if (response.data === "User already exists") {
        alert("User already exists, please login");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" flex flex-col space-y-8 p-4 m-5 rounded-3xl">
        <h1 className="text-[#c49358] text-5xl font-semibold text-center m-3">
          SignUp!
        </h1>

        <form>
          <div className="flex flex-col text-white justify-center items-center">
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Full Name"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 bg-black border-b"
            />
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 bg-black border-b"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="w-96 max-w-5xl m-5 p-2 focus:outline-0 bg-black border-b"
            />
            <h3 className="text-white m-3 ">
              Already a member?{" "}
              <Link to="/login" className="decoration-white underline">
                LogIn
              </Link>
            </h3>
            <Link to="/login">
              <button
                type="submit"
                className="bg-[#896639] hover:border hover:border-[#d0bea7] hover:bg-black hover:text-[#c49358] duration-500 w-40 mx-auto mt-6 font-semibold px-2 py-4 rounded-lg md:mx-10"
                onClick={HandleClick}
              >
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
