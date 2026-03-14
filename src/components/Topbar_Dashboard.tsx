"use client";

import { Settings } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";

export function Topbar_Dashboard() {
    const { user } = useAuthStore();
    return (
        <div className=" bg-gray-200 h-16 flex items-center justify-between px-20">
            <div>
                <p className="text-xl font-bold">Build My Agent</p>
            </div>
            <div className=" flex gap-5">
                <p>{user?.email}</p>
                <button className="hover:text-gray-600 transition-colors duration-200 cursor-pointer">
                    <Settings className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}