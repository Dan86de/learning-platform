import { AuthLayout } from "@/components/catalyst/auth-layout";
import { Button } from "@/components/catalyst/button";
import { Checkbox, CheckboxField } from "@/components/catalyst/checkbox";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Strong, Text, TextLink } from "@/components/catalyst/text";
import { useSignIn } from "@clerk/tanstack-react-start";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useState } from "react";

export const SignIn = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle the submission of the sign-in form
  const handleSubmit = useCallback(
    async (_data: FormData) => {
      if (!isLoaded) return;

      // Start the sign-in process using the email and password provided
      try {
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        });

        // If sign-in process is complete, set the created session as active
        // and redirect the user
        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
          navigate({ to: "/app" });
        } else {
          // If the status is not complete, check why. User may need to
          // complete further steps.
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err) {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(err, null, 2));
      }
    },
    [email, password, signIn, setActive, navigate, isLoaded],
  );

  return (
    <AuthLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
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
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            value={email}
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            value={password}
          />
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
