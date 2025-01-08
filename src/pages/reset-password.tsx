import { ResetPasswordForm } from "@/components/reset-password-form/reset-password-form";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) navigate("/");
  }, []);

  return (
    <div className="flex w-[350px] flex-col items-center">
      <h3 className="mb-4 text-2xl font-semibold">Create new password</h3>
      <section className="w-4/5">
        <ResetPasswordForm />
      </section>
    </div>
  );
}
