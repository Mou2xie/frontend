import { Topbar_Dashboard } from "@/components/Topbar_Dashboard";
import { AgentCard } from "@/components/AgentCard";
import { Plus } from "lucide-react";

export default function DashboardHome() {
    return (
        <div className=" min-h-screen">
            <Topbar_Dashboard />
            <section className=" max-w-[1200px] mx-auto ">
                <div className=" flex justify-between items-center h-28">
                    <p className=" text-2xl font-bold">My Agents</p>
                    <button className=" bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <Plus />
                        Create Agent
                    </button>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                </div>
            </section>
        </div>
    )
}