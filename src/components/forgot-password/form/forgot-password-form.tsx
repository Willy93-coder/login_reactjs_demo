import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { resetPassword } from "@/auth/auth";
import { useToast } from "@/hooks/use-toast";

export function ForgotPasswordForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (event) {
      if (typeof event.stopPropagation === "function") event.stopPropagation();
    }
    return form.handleSubmit(
      async (values: z.infer<typeof forgotPasswordSchema>) => {
        try {
          await resetPassword(values.email);
          toast({
            title: "Email sent it",
            description: "Review your inbox email",
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Something went wrong!",
            description: "The email doesn't send it",
          });
        }
      },
    )(event);
  }

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Validate</Button>
      </form>
    </Form>
  );
}
