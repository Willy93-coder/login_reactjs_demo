import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SignInInputsModel } from "./model";
import { signInWithEmailAndPassword } from "@/auth/auth";
import { useToast } from "@/hooks/use-toast";

export function SignInForm() {
  const { register, handleSubmit } = useForm<SignInInputsModel>();
  const { toast } = useToast();
  async function signIn(values: SignInInputsModel) {
    try {
      await signInWithEmailAndPassword({
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      if (error instanceof Error)
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: `${error.message}`,
        });
    }
  }
  return (
    <form onSubmit={handleSubmit(signIn)}>
      <div className="mb-6">
        <Label>Email</Label>
        <Input {...register("email")} placeholder="m@email.com" required />
      </div>
      <div className="mb-6">
        <Label>Password</Label>
        <Input {...register("password")} type="password" required />
      </div>
      <Button type="submit" className="mb-6 w-full">
        Login
      </Button>
    </form>
  );
}
