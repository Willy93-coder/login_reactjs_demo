import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function RegisterScreen() {
  return (
    <div className="flex w-[350px] flex-col items-center">
      <section className="mb-4">
        <h3 className="text-center text-2xl font-semibold">
          Create an account
        </h3>
      </section>
      <section className="w-4/5">
        <Button variant="outline" className="w-full">
          Create account with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Do have an account?{" "}
          <Link to="/" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </section>
    </div>
  );
}
