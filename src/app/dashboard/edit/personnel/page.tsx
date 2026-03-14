export default function EditPersonnel() {
    return (
        <div>
            <h1 className=" text-3xl font-semibold">Personnel</h1>

            <form action="" className=" flex flex-col mt-10 gap-5">
                <div className=" flex flex-col gap-3">
                    <label htmlFor="name" className=" text-lg text-stone-500">Agent Name</label>
                    <input type="text" id="name" name="name" className=" max-w-[500px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500" />
                </div>
                <div className=" flex flex-col gap-3">
                    <label htmlFor="personnel" className=" text-lg text-stone-500">Personnel</label>
                    <textarea id="personnel" name="personnel" className=" max-w-[500px] min-h-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500" />
                </div>
                <div className=" flex flex-col gap-3">
                    <label htmlFor="job_description" className=" text-lg text-stone-500">Job Description</label>
                    <textarea id="job_description" name="job_description" className=" max-w-[500px] min-h-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500" />
                </div>
                <div className=" flex flex-col gap-3">
                    <label htmlFor="goals" className=" text-lg text-stone-500">Goals</label>
                    <textarea id="goals" name="goals" className=" max-w-[500px] min-h-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500" />
                </div>
                <button type="submit" className=" w-fit px-5 py-2 bg-blue-500 rounded text-white font-medium hover:bg-blue-600 transition-colors">Save</button>
            </form>
        </div>
    )
}