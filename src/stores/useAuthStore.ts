"use client";

import { create } from "zustand";
import { Session, User } from "@supabase/supabase-js";

interface AuthState {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    setAuth: (session: Session | null) => void;
    setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    session: null,
    isLoading: true,
    setAuth: (session) => set({
        session,
        user: session?.user ?? null,
        isLoading: false,
    }),
    setLoading: (isLoading) => set({ isLoading }),
}));
