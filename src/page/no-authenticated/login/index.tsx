import { loginFormSchema, TLoginFormSchema } from "@/data/schemas/auth";
import SignIn from "@/shared/components/sign-in";
import FormContainer from "@/shared/container/form-container";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function Login() {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const login = (payload: TLoginFormSchema) => {
    console.log(payload);
  };

  return (
    <FormProvider {...form}>
      <FormContainer onSubmit={form.handleSubmit(login)}>
        <SignIn />
      </FormContainer>
    </FormProvider>
  );
}
