"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/tracking", {
      data: {
        title: title,
        description: description,
      },
    });
    redirect("/tracking");
  }
  return (
    <div>
      <div className="mt-12">
        <div
          className="  sm:text-2xl mg: text-5xl lg:text-7xl text-center mt-36
        "
        >
          New Track
        </div>
        <form className="flex flex-col gap-6 mt-4 items-center justify-center">
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
            className="border-2 w-3/6   p-3"
            type="text"
            placeholder="title"
          />
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border-2 w-8/12  p-3 h-52 "
            type="text"
            placeholder="description"
          />
          <button
            className="rounded-2xl border-2 p-4 hover:bg-green-500"
            onClick={handle}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
