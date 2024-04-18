import LoginForm from '@/components/loginForm/LoginForm'
import Link from 'next/link'
import React from 'react'



const page = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="p-10 bg-white rounded-lg w-full sm:w-3/4 lg:w-auto shadow-lg">
        <h1 className="font-semibold text-4xl text-center text-neutral-900">Login</h1>
        <hr className="my-5" />
        <LoginForm />
        <div className='text-center text-sm mt-5 text-neutral-500'>
          Not Have an account? <Link href={"/signup"} className='font-bold text-neutral-900'> Register</Link>
        </div>
      </div>
    </div>
  );
}

export default page