"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface AuthContextValue {
  isLoggedIn: boolean;
  /** True until the first client read completes — avoids UI flicker. */
  ready: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "loggedIn";

function writeCookie(value: boolean) {
  // 7-day cookie so middleware can read auth state on the server.
  document.cookie = `${STORAGE_KEY}=${value}; path=/; max-age=${
    value ? 60 * 60 * 24 * 7 : 0
  }; SameSite=Lax`;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);

  // Initial read from localStorage (browser only).
  useEffect(() => {
    try {
      setIsLoggedIn(localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      setIsLoggedIn(false);
    }
    setReady(true);
  }, []);
 
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setIsLoggedIn(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore storage failures — state still updates in memory */
    }
    writeCookie(true);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "false");
    } catch {
      /* ignore */
    }
    writeCookie(false);
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
