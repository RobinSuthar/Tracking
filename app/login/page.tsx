import { useEffect } from "react";
import LoginForm from "../components/loginForm";
import { redirect } from "next/navigation";

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("tracking")) {
      redirect("/tracking");
    }
  }, []);
  return (
    <div>
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
}
