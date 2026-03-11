"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";

export type ActionState = {
    success: boolean;
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
};

export async function signUp(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    const errors: NonNullable<ActionState["errors"]> = {};

    // 1. Password length
    if (!password || password.length < 8) {
        errors.password = [...(errors.password || []), "Password must be at least 8 characters long."];
    }

    // 2. Password complexity
    const hasUpperCase = /[A-Z]/.test(password || "");
    const hasLowerCase = /[a-z]/.test(password || "");
    const hasNumber = /[0-9]/.test(password || "");

    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
        errors.password = [
            ...(errors.password || []),
            "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        ];
    }

    // 3. Password match
    if (password !== confirmPassword) {
        errors.confirmPassword = ["Passwords do not match."];
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "Validation failed. Please try again.",
            errors,
        };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
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

