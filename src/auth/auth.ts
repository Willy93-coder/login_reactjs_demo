import { SignInInputsModel } from "@/components/sign-in-form/model";
import { SignUpInputsModel } from "@/components/sign-up-form/model";
import { mapToUserModel, User } from "@/lib/models/user-model";
import { supabase } from "@/supabase/supabase-client";

async function signInWithGoogleProvider(): Promise<void> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw new Error("Login error");
}

async function signInWithEmailAndPassword({
  email,
  password,
}: SignInInputsModel): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error("Credentials are not correct");
}

async function signUpWithEmailAndPassword({
  email,
  password,
}: SignUpInputsModel): Promise<void> {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) throw new Error("Sign up error");
}

async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Sign out error");
}

async function getUserInfo(): Promise<User | undefined> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return undefined;
  return mapToUserModel(user);
}

async function resetPassword(email: string): Promise<void> {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: import.meta.env.VITE_REDIRECT_URL_RESET_PASSWORD,
  });
  if (error) throw new Error("Email doesn't exist");
}

async function updatePassword(password: string): Promise<void> {
  const { error } = await supabase.auth.updateUser({ password: password });
  if (error) throw new Error("Error to update the password");
}

export {
  signInWithGoogleProvider,
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signOut,
  getUserInfo,
  resetPassword,
  updatePassword,
};
