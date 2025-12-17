import { useState } from "react";



export default function SignIn () {
  const validation = /[d]{3,6}$/;
  const [username, setUsername] = useState("");
  function welcomingUser (e) {
    setUsername (e.target.value.trim())
  }
  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div  className=" w-96">
     <h1 className="text-yellow-300 text-3xl mb-6 whitespace-nowrap truncate">
  {username && `Hi, ${username} 😃`}
</h1>

      <form className="shadow-xl p-6 bg-gray-300">

        <label className="text-3xl font-bold text-gray-800 flex mb-6 justify-center item-center">
          Create Account
        </label>

        <label className="block text-semibold text-3xl">Username</label>
        <input
        onChange={welcomingUser}
          type="text"
          placeholder="Username"
          className="w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2"
        />

        <label className="block text-semibold text-3xl">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2"
        />

        <label className="block text-3xl">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 w-full border rounded focus:ring-2 ring-blue-400 outline-none"
        />

        <label className="text-semibold text-3xl block mt-8">Gender</label>
        <select className="w-full p-4 border rounded focus:outline-none">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          type="submit"
          className=" cursor-pointer border rounded w-full mt-4 bg-blue-500 hover:bg-blue-400 p-2 text-white"
        >
          Sign In
        </button>
      </form>
      </div>
    </div>
  );
}
