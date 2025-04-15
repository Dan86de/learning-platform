import { AuthLayout } from "@/components/catalyst/auth-layout";
import { Button } from "@/components/catalyst/button";
import { Checkbox, CheckboxField } from "@/components/catalyst/checkbox";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Strong, Text, TextLink } from "@/components/catalyst/text";

export const SignIn = () => {
  return (
    <AuthLayout>
      <form
        action="#"
        method="POST"
        className="grid w-full max-w-sm grid-cols-1 gap-8"
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="mx-auto h-20 w-20 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]"
        />
        <Heading>Sign in to your account</Heading>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </Field>
        <div className="flex items-center justify-between">
          <CheckboxField>
            <Checkbox name="remember" />
            <Label>Remember me</Label>
          </CheckboxField>
          <Text>
            <TextLink href="#">
              <Strong>Forgot password?</Strong>
            </TextLink>
          </Text>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Text>
          Don’t have an account?{" "}
          <TextLink href="/sign-up">
            <Strong>Sign up</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
};
