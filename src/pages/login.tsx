import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/hooks/useAuthContext";

export function Login() {
  const { signInWithGoogleProvider } = useAuthContext();

  return (
    <div className="flex w-[350px] flex-col items-center">
      <section className="mb-4">
        <h3 className="text-2xl font-semibold">Login</h3>
      </section>
      <section className="w-4/5">
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
