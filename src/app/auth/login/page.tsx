import Link from "next/link";

export default function Login() {
    return (
        <div className=" min-h-screen grid grid-cols-5">
            <section className=" col-span-3 bg-gray-200"></section>
            <aside className=" col-span-2 flex flex-col justify-center items-center ">
                <div className=" w-3/5">
                    <h1 className=" text-4xl font-bold">MyAlly.ai</h1>
                    <p className=" text-gray-500 mt-1">Your AI. Getting things done.</p>
                    <form action="" className=" flex flex-col mt-10">
                        <div className=" space-y-3">
                            <input type="email" placeholder="Email" className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500" />
                            <input type="password" placeholder="Password" className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500" />
                        </div>
                        <Link href="/" className=" text-right text-stone-400 my-2 underline">Forgot password?</Link>
                        <button type="submit" className=" bg-gray-600 text-white rounded-md p-2 mt-5 hover:cursor-pointer hover:bg-gray-700 transition-colors duration-200">Login</button>
                    </form>
                    <div className=" flex items-center gap-2">
                        <hr className=" grow text-gray-200" />
                        <p className=" text-center text-gray-500 my-5">or</p>
                        <hr className=" grow text-gray-200" />
                    </div>
                    <button className=" w-full border border-gray-300 rounded-md p-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200">Login with Google</button>
                    <Link href="/auth/signup" className=" block text-center text-stone-400 mt-5">Don't have an account? <span className=" underline">Sign up</span></Link>
                </div>
            </aside>
        </div>
    );
}