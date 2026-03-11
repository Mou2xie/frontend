import Link from "next/link";

export default function Signup() {
    return (
        <div className=" min-h-screen bg-gray-100 flex justify-center items-center">
            <section className=" w-120 bg-white rounded-xl shadow-lg">
                <div className=" w-2/3 mx-auto my-16">
                    <h1 className=" text-2xl text-center">Create Account</h1>
                    <form action="" className=" flex flex-col mt-5">
                        <div className=" space-y-3">
                            <input type="email" placeholder="Email" className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500" />
                            <input type="password" placeholder="Password" className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500" />
                            <input type="password" placeholder="Confirm Password" className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500" />
                        </div>
                        <button type="submit" className=" bg-gray-600 text-white rounded-md p-2 mt-10 hover:cursor-pointer hover:bg-gray-700 transition-colors duration-200">Sign up</button>
                    </form>
                    <div className=" flex items-center gap-2">
                        <hr className=" grow text-gray-200" />
                        <p className=" text-center text-gray-500 my-5">or</p>
                        <hr className=" grow text-gray-200" />
                    </div>
                    <button className=" w-full border border-gray-300 rounded-md p-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200">Sign up with Google</button>
                    <Link href="/auth/login" className=" block text-center text-stone-400 mt-5">Have an account already? <span className=" underline text-gray-600">Log in</span></Link>
                </div>
            </section>
        </div>
    );
}