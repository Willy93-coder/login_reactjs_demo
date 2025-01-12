import { signInWithGoogleProvider, signOut } from "@/auth/auth";
import { AuthContext } from "@/hooks/useAuthContext";
import { supabase } from "@/supabase/supabase-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setToken(null);
        navigate("/");
      } else if (session) {
        if (event === "PASSWORD_RECOVERY") {
          // Improve password recovery
        }
        setToken(session.access_token);
        navigate("/home");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token, signInWithGoogleProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
