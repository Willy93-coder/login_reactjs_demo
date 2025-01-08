import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export { forgotPasswordSchema };
