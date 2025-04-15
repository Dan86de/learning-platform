import { AuthLayout } from "@/components/catalyst/auth-layout";
import { Button } from "@/components/catalyst/button";
import { Checkbox, CheckboxField } from "@/components/catalyst/checkbox";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Strong, Text, TextLink } from "@/components/catalyst/text";

export const SignUp = () => {
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
        <Heading>Create your account</Heading>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" autoComplete="new-password" />
        </Field>
        <CheckboxField>
          <Checkbox name="remember" defaultChecked />
          <Label>Get emails about product updates and news.</Label>
        </CheckboxField>
        <Button type="submit" className="w-full">
          Create account
        </Button>
        <Text>
          Already have an account?{" "}
          <TextLink href="/sign-in">
            <Strong>Sign in</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
};
