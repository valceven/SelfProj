"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {

    const { user, isLoading } = useAuth();
    const router = useRouter()

    useEffect(() => {
        console.log(`USER NI: ${user}`);
        if (!isLoading && !user) {
            router.push("/auth/login");
        }
    }, [user, router, isLoading]);

    if (isLoading) {
        return (
          <div className="bg-slate-200 flex h-full items-center justify-center p-8">
            <div className="text-xl">Loading...</div>
          </div>
        );
      }

    if (!user) {
        return null;
    }

    return (
        <> 
            <div className="bg-slate-200 flex h-full items-center justify-center p-8">
                <h1 className="text-2xl font-bold">
                    Welcome to the Dashboard, {user.username}!
                </h1>
            </div>
        </>
        
    );
};

export default Dashboard;