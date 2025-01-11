import SignIn, { loginSchema, TLoginSchema } from "@/shared/components/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const login = (payload: TLoginSchema) => {
    console.log(payload);
  };

  return <SignIn form={form} login={login} />;
}
