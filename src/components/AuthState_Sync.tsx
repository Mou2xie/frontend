"use client";

import { useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { useAuthStore } from "@/stores/useAuthStore";

export function AuthState_Sync({ user }: { user: User | null }) {
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        setUser(user);
    }, [user, setUser]);

    return null;
}
