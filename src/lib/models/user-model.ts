export type User = {
  name: string | undefined;
  email: string | undefined;
};

export function mapToUserModel(user: any): User {
  return {
    name: user.user_metadata.name,
    email: user.email,
  };
}
