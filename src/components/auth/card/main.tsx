import { Fragment } from "react";
import { Divider } from "../../divider.js";
import { PoweredBy } from "../../poweredby.js";
import { AuthSection } from "../sections/AuthSection.js";
import { ls } from "../../../strings.js";
import { useUiConfig } from "../../../hooks/useUiConfig.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export const MainAuthContent = () => {
  const { auth } = useUiConfig();

  const header = auth?.header ?? null;
  const sections = auth?.sections;
  const showSignInText = auth?.showSignInText ?? false;

  return (
    <>
      {header}
      {showSignInText && <h3 className="font-semibold text-lg">Sign in</h3>}
      {sections?.map((section, idx) => {
        return (
          <Fragment key={`auth-section-fragment-${idx}`}>
            <AuthSection key={`auth-section-${idx}`} authTypes={section} />
            {idx !== sections.length - 1 ? (
              <Divider key={`divider-${idx}`} />
            ) : null}
          </Fragment>
        );
      })}
      <div className="flex flex-col w-full items-center gap-1">
        <p className="text-fg-tertiary text-center text-xs py-2">
          {`${ls.login.tosPrefix} `}
          <a
            className="text-fg-accent-brand cursor-pointer underline"
            href="https://www.alchemy.com/terms-conditions/end-user-terms"
          >
            {ls.login.tosLink}
          </a>
        </p>
        <PoweredBy />
      </div>
    </>
  );
};