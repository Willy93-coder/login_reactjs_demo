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
    <div>
      <h3>Welcome</h3>
      {user && (
        <div>
          <p>{user.name}</p>
        </div>
      )}
      <Button onClick={async () => await signOut()}>Sign Out</Button>
    </div>
  );
}
