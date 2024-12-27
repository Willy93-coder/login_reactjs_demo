import { AuthContextModel } from "@/lib/models/auth-context-model";
import { createContext, useContext } from "react";

const AuthContext = createContext<AuthContextModel | null>(null);

function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Not context provided");
  }
  return context;
}

export { useAuthContext, AuthContext };
