// This spinner icon has to be in png format because svg does not support angular gradients
const SpinnerLightModeBase64 =
  "data:image/png;base64,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";

const SpinnerDarkModeBase64 =
  "data:image/png;base64,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";

// eslint-disable-next-line jsdoc/require-jsdoc
export function Spinner({ className }: { className?: string }) {
  return (
    <>
      <img
        src={SpinnerLightModeBase64}
        alt="Loading"
        className={`dark:hidden animate-spin ${className ?? ""}`}
      />
      <img
        src={SpinnerDarkModeBase64}
        alt="Loading"
        className={`hidden animate-spin dark:inline ${className ?? ""}`}
      />
    </>
  );
}