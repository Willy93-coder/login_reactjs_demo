import { passwordRegex } from "@/lib/regex";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().regex(passwordRegex, {
      message:
        "Password must be at least 8 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special symbol",
    }),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must macth!",
      path: ["confirmPassword"],
    },
  );

export { signUpSchema };
