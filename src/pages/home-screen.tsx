import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function HomeScreen() {
  const navigate = useNavigate();
  const { token, signOut } = useAuthContext();
  const user = useGetUserInfo();

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4 text-6xl">Welcome</h3>
      {user && <p className="mb-4 text-3xl">{user.name}</p>}
      <Button className="w-full" onClick={async () => await signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
