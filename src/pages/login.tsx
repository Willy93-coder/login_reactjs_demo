import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/hooks/use-auth-context";
import { SignInForm } from "@/components/sign-in-form/sign-in-form";

export function Login() {
  const { signInWithGoogleProvider } = useAuthContext();

  return (
    <div className="flex w-[350px] flex-col items-center">
      <section className="mb-4">
        <h3 className="text-2xl font-semibold">Login</h3>
      </section>
      <section className="w-4/5">
        <SignInForm />
        <div className="relative mb-6 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={async () => await signInWithGoogleProvider()}
        >
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/create-account" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </section>
    </div>
  );
}
