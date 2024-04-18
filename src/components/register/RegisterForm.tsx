"use client";
import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    useEffect(() => {
      signOut({
        redirect: false,
      });
    }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter()

  const register = async () => {
    try {
        await axios.post("/api/register",{
            email,password
        })
        // await signIn("credentials",{
        //     email,password,
        //     redirect:false
        // })
        toast.success("User Register Successfully")
        router.push("/signin")
    } catch (error:any) {
        console.error(error)
        // toast.error(error)
        toast.error("failed to register")
    }
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        label="Name"
      />
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="Email"
        type="email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        label="Password"
        type="password"
      />
      <button
        onClick={register}
        className="px-10  py-3 bg-blue-700 text-white rounded-full"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
