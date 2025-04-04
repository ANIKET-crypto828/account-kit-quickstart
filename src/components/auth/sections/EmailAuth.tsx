import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { useAuthenticate } from "../../../hooks/useAuthenticate.js";
import { useSigner } from "../../../hooks/useSigner.js";
import { ChevronRight } from "../../../icons/chevron.js";
import { MailIcon } from "../../../icons/mail.js";
import { Button } from "../../button.js";
import { IS_SIGNUP_QP } from "../../constants.js";
import { Input } from "../../input.js";
import { useAuthContext } from "../context.js";
import type { AuthType } from "../types.js";
import { ls } from "../../../strings.js";

type EmailAuthProps = Extract<AuthType, { type: "email" }>;

// this is not used externally
// eslint-disable-next-line jsdoc/require-jsdoc
export const EmailAuth = ({
  hideButton = false,
  buttonLabel = ls.login.email.button,
  placeholder = ls.login.email.placeholder,
}: EmailAuthProps) => {
  const { setAuthStep } = useAuthContext();
  const signer = useSigner();
  const { authenticateAsync, isPending } = useAuthenticate({
    onMutate: async (params) => {
      if ("email" in params) {
        setAuthStep({ type: "email_verify", email: params.email });
      }
    },
    onSuccess: () => {
      setAuthStep({ type: "complete" });
    },
    onError: (error) => {
      // TODO: need to handle this and show it to the user
      console.error(error);
      // TODO: need to pass this error along
      setAuthStep({ type: "initial" });
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value: { email } }) => {
      const existingUser = await signer?.getUser(email);
      const redirectParams = new URLSearchParams();
      if (existingUser == null) {
        redirectParams.set(IS_SIGNUP_QP, "true");
      }

      await authenticateAsync({ type: "email", email, redirectParams });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col gap-2 w-full">
        <form.Field
          name="email"
          validators={{
            onChange: z.string().email("Must provide a valid email."),
          }}
        >
          {(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              placeholder={placeholder}
              iconLeft={<MailIcon />}
              iconRight={
                hideButton ? (
                  <button
                    type="submit"
                    className="match-input cursor-pointer focus:outline-none focus:opacity-25"
                  >
                    <ChevronRight />
                  </button>
                ) : undefined
              }
              disabled={isPending}
            />
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [
            state.canSubmit,
            state.isSubmitting,
            state.values.email,
          ]}
        >
          {([canSubmit, isSubmitting, email]) =>
            !hideButton ? (
              <Button
                type="submit"
                variant="primary"
                disabled={Boolean(
                  isPending || !canSubmit || isSubmitting || !email
                )}
              >
                {buttonLabel}
              </Button>
            ) : null
          }
        </form.Subscribe>
      </div>
    </form>
  );
};