import { Settings, Share2, CirclePause, Trash2 } from "lucide-react";

export const AgentCard = () => {
    return (
        <div className=" bg-white rounded-2xl px-10 border border-gray-300">
            <div className=" flex justify-end items-center mt-5">
                <div className=" px-4 py-1 text-sm bg-gray-200 rounded-full">
                    working
                </div>
            </div>
            <div className=" w-24 h-24 bg-gray-200 rounded-xl mt-5"></div>
            <p className=" font-bold text-2xl mt-5">Agent Name</p>
            <p className=" text-gray-500 ">An AI customer support agent</p>
            <div className=" grid grid-cols-4 gap-5 mt-10 border-t border-gray-300 py-5">
                <a href="" className=" flex justify-center">
                    <Settings />
                </a>
                <a href="" className=" flex justify-center">
                    <Share2 />
                </a>
                <a href="" className=" flex justify-center">
                    <CirclePause />
                </a>
                <a href="" className=" flex justify-center">
                    <Trash2 />
                </a>
            </div>
        </div>
    )
}