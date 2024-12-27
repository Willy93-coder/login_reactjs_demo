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
      console.log("event: ", event);

      if (session) {
        setToken(session.access_token);
        navigate("/home");
      } else if (event === "SIGNED_OUT") {
        console.log("SIGNED_OUT: ", event);
        setToken(null);
        navigate("/");
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
