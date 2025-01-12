export type AuthContextModel = {
  token: string | null;
  signInWithGoogleProvider: () => Promise<void>;
  signOut: () => Promise<void>;
};
