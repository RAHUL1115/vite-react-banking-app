import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cookies from '../utils/cookies';


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("shailesh@admin.com");
  const [password, setPassword] = useState("admin");

  async function handleLogin(e) {
    e.preventDefault();
    // console.log("wokring");

    if (username === "" || password === "") {
      return;
    }

    let url = `http://localhost:5000/api/v1/bank-app/auth/login`;

    axios
      .post(url, {
        username: username,
        password: password,
      },{
        withCredentials: true,
      })
      .then((res) => {
        let id = res.data.id;
        let roleName = res.data.roleName.toLowerCase();
        let userName = res.data.username;
        
        cookies.set('id', id, { path: '/' });
        cookies.set('role', roleName, { path: '/' });
        cookies.set('userName', userName, { path: '/' });

        if (roleName === "admin") {
          navigate(`/admin/users`);
        } else {
          navigate(`/user`);
        }
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form onSubmit={handleLogin} className="max-w-xl w-full mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
