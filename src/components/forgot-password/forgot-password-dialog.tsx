import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ForgotPasswordForm } from "./form/forgot-password-form";

export function ForgotPasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="ml-auto cursor-pointer text-sm underline-offset-4 hover:underline">
          Forgot your password?
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Email</DialogTitle>
          <DialogDescription>
            Validate your email to reset password
          </DialogDescription>
        </DialogHeader>
        <ForgotPasswordForm />
      </DialogContent>
    </Dialog>
  );
}
