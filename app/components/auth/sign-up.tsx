import { AuthLayout } from "@/components/catalyst/auth-layout";
import { Button } from "@/components/catalyst/button";
import { Checkbox, CheckboxField } from "@/components/catalyst/checkbox";
import { Field, Label } from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Strong, Text, TextLink } from "@/components/catalyst/text";
import { useSignUp } from "@clerk/tanstack-react-start";
import { Route, useNavigate, useRouter } from "@tanstack/react-router";
import { useCallback, useState } from "react";

export const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (_data: FormData) => {
      console.log("HANDLE SUBMIT:", { isLoaded });
      if (!isLoaded) return;

      // Start the sign-up process using the email and password provided
      try {
        await signUp.create({
          emailAddress,
          password,
        });

        // Send the user an email with the verification code
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        // Set 'verifying' true to display second form
        // and capture the OTP code
        setVerifying(true);
      } catch (err) {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(err, null, 2));
      }
    },
    [isLoaded, signUp, emailAddress, password],
  );

  // Handle the submission of the verification form
  const handleVerify = useCallback(
    async (_data: FormData) => {
      if (!isLoaded) return;

      try {
        // Use the code the user provided to attempt verification
        const signUpAttempt = await signUp.attemptEmailAddressVerification({
          code,
        });

        // If verification was completed, set the session to active
        // and redirect the user
        if (signUpAttempt.status === "complete") {
          await setActive({ session: signUpAttempt.createdSessionId });
          navigate({ to: "/app" });
        } else {
          // If the status is not complete, check why. User may need to
          // complete further steps.
          console.error(JSON.stringify(signUpAttempt, null, 2));
        }
      } catch (err) {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error("Error:", JSON.stringify(err, null, 2));
      }
    },
    [isLoaded, signUp, code, setActive, navigate],
  );

  if (verifying) {
    return (
      <AuthLayout>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleVerify(formData);
          }}
          className="grid w-full max-w-sm grid-cols-1 gap-8"
        >
          <Heading>Verify your email</Heading>
          <Field>
            <Label id="code">Enter your verification code</Label>
            <Input
              value={code}
              id="code"
              name="code"
              onChange={(e) => setCode(e.target.value)}
            />
          </Field>

          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
      </AuthLayout>
    );
  }

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
        <Heading>Create your account</Heading>
        <Field>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <CheckboxField>
          <Checkbox name="remember" defaultChecked />
          <Label>Get emails about product updates and news.</Label>
        </CheckboxField>

        {/* CAPTCHA Widget */}
        <div id="clerk-captcha" />

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
