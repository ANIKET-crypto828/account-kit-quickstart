import { useUiConfig } from "../../../hooks/useUiConfig.js";
import { AddedPasskeyIllustration } from "../../../icons/illustrations/added-passkey.js";
import { PoweredBy } from "../../poweredby.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export function PasskeyAdded() {
  const { illustrationStyle } = useUiConfig();

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-col items-center justify-center h-12 w-12">
        <AddedPasskeyIllustration
          illustrationStyle={illustrationStyle ?? "flat"}
          height="48"
          width="48"
        />
      </div>
      <h3 className="font-semibold text-lg">Passkey added!</h3>
      <p className="text-fg-secondary text-sm text-center">
        You can use this passkey to sign in next time.
      </p>
      <PoweredBy />
    </div>
  );
}