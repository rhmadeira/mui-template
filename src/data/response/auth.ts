export type TLoginResponse = {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
};
