'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="w-full m-[50px] flex flex-col justify-center items-center">

      <h1 className="text-[40px]">User Dashboard</h1>

      {/* login button  */}
      <section className="flex justify-center items-center gap-3">
      <Button className="border rounded-[10px] w-[150px]" 
      onClick={() => router.push("/login")}
      >
        Login
      </Button>

      {/* signup button  */}
      <Button className="border rounded-[10px] w-[150px]"
      onClick={() => router.push("/signup")}
      >
        Signup
      </Button>
      </section>
      
    </main>
  );
}
