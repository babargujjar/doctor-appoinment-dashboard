"use client";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import toast from "react-hot-toast";
import Link from "next/link";
import bcrypt from "bcrypt";


const LoginForm = () => {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      if (
        !email ||
        !password
      ) {
        toast.error("Enter all fields");
        return;
      }
      const loginResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log('loginResult', loginResult)
      if (loginResult?.ok) {
        toast.success("User Login Successfully");
        window.location.assign("/dashboard");
      } else if (loginResult?.status === 401) {
        toast.error("Invalid Email or Password");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to login");
    }
  };
  // const login = async () => {
  //   try {
  //     if (!email || !password) {
  //       toast.error("Enter all fields");
  //       return;
  //     }

  //     const user = await prisma.user.findMany({
  //       where: {
  //         email,
  //       },
  //     });

  //     if (user.length === 0) {
  //       toast.error("No user found");
  //       return;
  //     }

  //     const validUser = user.find((u) =>
  //       bcrypt.compareSync(password, u.hashedPassword)
  //     );

  //     if (validUser) {
  //       toast.success("User Login Successfully");
  //       window.location.assign("/dashboard");
  //     } else {
  //       toast.error("Invalid Email or Password");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to login");
  //   }
  // };

  return (
    <div className="flex flex-col space-y-5 justify-center">
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Email</h3>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          type="email"
          placeholder="e-mail"
        />
      </div>
      <div className="h-[68px] mb-[10px]">
        <h3 className="text-[16px] mb-[10px] text-[#4F4F4F]">Password</h3>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="pt-[22px]">
        <button
          onClick={login}
          className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
        >
          Login
        </button>
      </div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="py-[15px] justify-center items-start flex bg-[#0000AC] text-[#FFFFFF] rounded-[10px] w-full text-[16px] font-medium"
      >
        Google SignIn
      </button>
      <div className="text-center text-sm mt-5 text-neutral-500">
        Does't have an account?{" "}
        <Link href={"/signup"} className="font-bold text-[#0000AC]">
          Register{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default LoginForm;
