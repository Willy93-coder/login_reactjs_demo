import { getUserInfo } from "@/auth/auth";
import { User } from "@/lib/models/user-model";
import { useEffect, useState } from "react";

export function useGetUserInfo(): User | undefined {
  const [userInfo, setUserInfo] = useState<User | undefined>({
    name: undefined,
    email: undefined,
  });

  useEffect(() => {
    async function loadUserInfo() {
      const user = await getUserInfo();
      if (user) {
        setUserInfo({
          name: user.name,
          email: user.email,
        });
      }
    }
    loadUserInfo();
  }, []);

  return userInfo;
}
