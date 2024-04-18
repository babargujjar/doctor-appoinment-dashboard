import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../libs/prismadb"
import bcrypt from "bcrypt"


export const authOptions : AuthOptions = {
    pages:{signIn:"/signin"},
    providers :[
        Credentials({
            name:"credentials",
            credentials:{
                email:{label:"Email",type:"email"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Missing Credentials")
                }
                

                const user = await prismadb.user.findFirst({
                    where:{
                        email:credentials.email,
                    }
                })

                if(!user || !user.id || !user.hashedPassword){
                    throw new Error("Invalid Credentials")
                }

                // const currentHashedPassword = await bcrypt.hash(credentials.password,12)

                const comparepassword = await bcrypt.compare(credentials.password,user.hashedPassword)
                
                if(comparepassword){
                  return user
                }
                // if(currentHashedPassword !== user.hashedPassword){
                //      throw new Error("Invalid Credential")
                // }
                
            },
        })
     ],
     secret : process.env.NEXTAUTH_SECRET,
     session:{
        strategy:'jwt'
     },
     debug: process.env.NODE_ENV !== "production"
}