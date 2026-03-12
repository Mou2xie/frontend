"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";

export type ActionState = {
    success: boolean;
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
};

export async function logIn(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: NonNullable<ActionState["errors"]> = {};

    if (!email) {
        errors.email = ["Email is required."];
    }

    if (!password) {
        errors.password = ["Password is required."];
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "Validation failed, please check your email and password and try again.",
            errors,
        };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    }

    redirect("/");
}

