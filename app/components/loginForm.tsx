"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  async function handleClick(e: React.FormEvent) {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const response = await axios.post(
        "http://localhost:3000/api/credentials",
        {
          username: username,
          password: password,
        }
      );

      if (response.data.message.id) {
        alert("Login Success");
        localStorage.setItem("trackingusername", response.data.message.usern);
        return router.push("/tracking");
      }
      return alert("Incorrect password");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center ">
      <div>
        <div>
          <h1 className="text-7xl font-bold  hover:text-green-500  ">
            {" "}
            Tracking
          </h1>
        </div>
        <form className="flex flex-col gap-8 mt-12 ">
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
            className="border-2  p-3"
            type="text"
            title="username"
            placeholder="Who is there. Tell me your name"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 p-3 "
            type="password"
            placeholder="and What about password"
          />
          <button
            className="rounded-2xl border-2 p-4 hover:bg-green-500"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
