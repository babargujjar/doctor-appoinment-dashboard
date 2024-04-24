// "use client"
// import React, { useEffect, useState } from 'react'
// import Input from '../input/Input';
// import toast from 'react-hot-toast';
// import { signIn, signOut } from 'next-auth/react';

// const LoginForm = () => {

//   useEffect(()=>{
//     signOut({
//       redirect:false
//     })
//   },[])

//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")

//   const login = async ()=>{
//      try {
//       //  await axios.post("/api/register", {
//       //    email,
//       //    password,
//       //  });
//       const login = await signIn("credentials",{
//            email,password,
//            redirect:false
//        })
//       //  console.log('login', login)
//        if(login?.ok){
//         toast.success("User Login Successfully");
//         window.location.assign("/")
//        }else if(login?.status === 401){
//         toast.error("Invalid Password");
//        }
//       //  console.log(login)
//       //  toast.success("User Login Successfully");
//       //  router.push("/signin");
//      } catch (error: any) {
//        console.error(error);
//        toast.error("failed to register");
//      }

//   }

//   return (
//     <div className='flex flex-col space-y-5 justify-center'>
//       <Input
//        onChange={(e)=>setEmail(e.target.value)}
//        value={email}
//        label='Email'
//        type='email'
//        />
//       <Input
//        onChange={(e)=>setPassword(e.target.value)}
//        value={password}
//        label='Password'
//        type='password'
//        />
//        <button onClick={login} className='px-10  py-3 bg-blue-700 text-white rounded-full'>
//          Login
//        </button>
//        <button onClick={()=>{signIn("google",{callbackUrl:"/"})}} className='px-10  py-3 bg-blue-700 text-white rounded-full'>
//          Google SignIn
//        </button>
//     </div>
//   )
// }

// export default LoginForm;
"use client";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import toast from "react-hot-toast";

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
      const loginResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (loginResult?.ok) {
        toast.success("User Login Successfully");
        window.location.assign("/");
      } else if (loginResult?.status === 401) {
        toast.error("Invalid Email or Password");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to login");
    }
  };

  return (
    <div className="flex flex-col space-y-5 justify-center">
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
        onClick={login}
        className="px-10  py-3 bg-blue-700 text-white rounded-full"
      >
        Login
      </button>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-10  py-3 bg-blue-700 text-white rounded-full"
      >
        Google SignIn
      </button>
    </div>
  );
};

export default LoginForm;
