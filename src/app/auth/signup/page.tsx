"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUp } from "@/serverActions/signUp";

export default function Signup() {
    const [state, formAction, isPending] = useActionState(signUp, null);

    return (
        <div className=" min-h-screen bg-gray-100 flex justify-center items-center">
            <section className=" w-120 bg-white rounded-xl shadow-lg">
                <div className=" w-2/3 mx-auto my-16">
                    <h1 className=" text-2xl text-center font-bold">Create Account</h1>

                    {state?.message && !state.success && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                            {state.message}
                        </div>
                    )}

                    {state?.success && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-md text-sm">
                            {state.message}
                        </div>
                    )}

                    <form action={formAction} className=" flex flex-col mt-5">
                        <div className=" space-y-3">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                                />
                                {state?.errors?.email && (
                                    <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                                />
                                {state?.errors?.password && (
                                    <div className="mt-1">
                                        {state.errors.password.map((error, i) => (
                                            <p key={i} className="text-red-500 text-xs">{error}</p>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    required
                                    className=" w-full border border-gray-300 rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                                />
                                {state?.errors?.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{state.errors.confirmPassword[0]}</p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className=" bg-gray-600 text-white rounded-md p-2 mt-10 hover:cursor-pointer hover:bg-gray-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isPending ? "Signing up..." : "Sign up"}
                        </button>
                    </form>

                    <div className=" flex items-center gap-2">
                        <hr className=" grow text-gray-200" />
                        <p className=" text-center text-gray-500 my-5">or</p>
                        <hr className=" grow text-gray-200" />
                    </div>

                    <button className=" w-full border border-gray-300 rounded-md p-2 hover:cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-200">
                        Sign up with Google
                    </button>

                    <Link href="/auth/login" className=" block text-center text-stone-400 mt-5">
                        Have an account already? <span className=" underline text-gray-600">Log in</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}