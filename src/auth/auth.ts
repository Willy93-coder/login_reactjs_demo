import { SignUpInputsModel } from "@/components/sign-up-form/model";
import { mapToUserModel, User } from "@/lib/models/user-model";
import { supabase } from "@/supabase/supabase-client";

async function signInWithGoogleProvider(): Promise<void> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) throw new Error("Login error");
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

export {
  signInWithGoogleProvider,
  signUpWithEmailAndPassword,
  signOut,
  getUserInfo,
};
