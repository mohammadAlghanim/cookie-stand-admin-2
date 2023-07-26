import Head from "next/head";
import Main from "@/components/Main";
import Header from "@/components/Header";
import { useAuth } from "@/context/authtext";
import Login from "@/components/Login";


export default function Home() {
  const {user} = useAuth()
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user?<div className="flex flex-1 min-h-screen flex-col">
        <Header />
        
        <Main />
        
      </div>:<Login/>}
      
    </>
  );
}