"use client";

import { useEffect } from "react";
import { createClient } from "@/libs/supabase/client";
import { useAuthStore } from "@/stores/useAuthStore";

export function AuthState_Sync() {
    const setAuth = useAuthStore((state) => state.setAuth);
    const supabase = createClient();

    useEffect(() => {
        // Initial session check
        supabase.auth.getSession().then(({ data: { session } }) => {
            setAuth(session);
        });

        // Listen for changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setAuth(session);
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, [setAuth, supabase.auth]);

    return null; // This component doesn't render anything
}
