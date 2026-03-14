import { Sidebar_Edit } from "@/components/Sidebar_Edit";
import { HomeIcon } from "lucide-react";

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen flex flex-col">

      <div className=" bg-gray-200 h-16 flex items-center justify-between px-20">

        <div className=" flex items-center gap-20">
          <HomeIcon size={32} />
          <div className=" flex items-center gap-5">
            <div className=" w-10 h-10 bg-gray-400 rounded-sm"></div>
            <div className=" space-y-[-3px]">
              <p className=" text-lg">Agent A</p>
              <p className=" text-sm text-gray-600">An AI customer support agent</p>
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-5">
          <button className=" px-5 py-2 bg-blue-500 rounded text-white font-medium hover:bg-blue-600 transition-colors">Save</button>
          <button className=" px-5 py-2 bg-gray-400 rounded text-white font-medium hover:bg-gray-500 transition-colors">Publish</button>
        </div>

      </div>

      <section className=" grow flex">
        <Sidebar_Edit />
        <section className=" p-10">
          {children}
        </section>
      </section>

    </div>
  );
}
