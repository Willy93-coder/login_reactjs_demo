import { ResetPasswordForm } from "@/components/reset-password-form/reset-password-form";

export function ResetPassword() {
  return (
    <div className="flex w-[350px] flex-col items-center">
      <h3 className="mb-4 text-2xl font-semibold">Create new password</h3>
      <section className="w-4/5">
        <ResetPasswordForm />
      </section>
    </div>
  );
}
