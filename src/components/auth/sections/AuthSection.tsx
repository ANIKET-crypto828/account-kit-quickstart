import type { AuthType } from "../types.js";
import { EmailAuth } from "./EmailAuth.js";
import { InjectedProvidersAuth } from "./InjectedProvidersAuth.js";
import { PasskeyAuth } from "./PasskeyAuth.js";

type AuthSectionProps = {
  authTypes: AuthType[];
};

// This is not used externally
// eslint-disable-next-line jsdoc/require-jsdoc
export const AuthSection = ({ authTypes, ...props }: AuthSectionProps) => {
  // TODO: this should also handle the button grouping logic present in the figma designs
  // however, we only support email auth and passkey auth right now so it's not that important
  return (
    <div className="flex flex-col gap-2 w-full" {...props}>
      {authTypes.map((authType, index) => {
        switch (authType.type) {
          case "email":
            return <EmailAuth key={index} {...authType} />;
          case "passkey":
            return <PasskeyAuth key={index} {...authType} />;
          case "injected":
            return <InjectedProvidersAuth key={index} />;
          default:
            throw new Error("Not implemented");
        }
      })}
    </div>
  );
};