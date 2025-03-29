import { type SVGProps } from "react";
import type { IllustrationProps } from "./types.js";

// eslint-disable-next-line jsdoc/require-jsdoc
export const PasskeySmileyIllustration = ({
  className,
  illustrationStyle: style,
  ...props
}: IllustrationProps) => {
  return (
    <>
      {style === "outline" && (
        <>
          <PasskeySmileyOutlineLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <PasskeySmileyOutlineDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "linear" && (
        <>
          <PasskeySmileyLinearLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <PasskeySmileyLinearDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "filled" && (
        <>
          <PasskeySmileyFilledLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <PasskeySmileyFilledDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
      {style === "flat" && (
        <>
          <PasskeySmileyFlatLight
            className={`dark:hidden text-fg-accent-brand ${className ?? ""}`}
            {...props}
          />
          <PasskeySmileyFlatDark
            className={`hidden dark:block text-fg-accent-brand ${
              className ?? ""
            }`}
            {...props}
          />
        </>
      )}
    </>
  );
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const PasskeyShieldIllustration = ({
  className,
  illustrationStyle: style,
  ...props
}: IllustrationProps) => {
  return (
    <>
      {style === "outline" && (
        <>
          <PasskeyShieldOutlineLight
            className={`dark:hidden ${className ?? ""}`}
            {...props}
          />
          <PasskeyShieldOutlineDark
            className={`hidden dark:block ${className ?? ""}`}
            {...props}
          />
        </>
      )}
      {style === "linear" && (
        <>
          <PasskeyShieldLinearLight
            className={`dark:hidden ${className ?? ""}`}
            {...props}
          />
          <PasskeyShieldLinearDark
            className={`hidden dark:block ${className ?? ""}`}
            {...props}
          />
        </>
      )}
      {style === "filled" && (
        <>
          <PasskeyShieldFilledLight
            className={`dark:hidden ${className ?? ""}`}
            {...props}
          />
          <PasskeyShieldFilledDark
            className={`hidden dark:block ${className ?? ""}`}
            {...props}
          />
        </>
      )}
      {style === "flat" && (
        <>
          <PasskeyShieldFlatLight
            className={`dark:hidden ${className ?? ""}`}
            {...props}
          />
          <PasskeyShieldFlatDark
            className={`hidden dark:block ${className ?? ""}`}
            {...props}
          />
        </>
      )}
    </>
  );
};

const PasskeySmileyOutlineLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.75C5.99593 2.75 2.75 5.99593 2.75 10C2.75 14.0041 5.99593 17.25 10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99593 14.0041 2.75 10 2.75ZM1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10ZM6.85 7.6C6.85 7.18579 7.18579 6.85 7.6 6.85H7.67969C8.0939 6.85 8.42969 7.18579 8.42969 7.6V7.66406C8.42969 8.07828 8.0939 8.41406 7.67969 8.41406H7.6C7.18579 8.41406 6.85 8.07828 6.85 7.66406V7.6ZM11.65 7.6C11.65 7.18579 11.9858 6.85 12.4 6.85H12.4708C12.8851 6.85 13.2208 7.18579 13.2208 7.6V7.66406C13.2208 8.07828 12.8851 8.41406 12.4708 8.41406H12.4C11.9858 8.41406 11.65 8.07828 11.65 7.66406V7.6ZM6.83188 11.7949C7.18408 11.5769 7.64633 11.6857 7.86434 12.0379C8.32026 12.7744 9.11107 13.25 10 13.25C10.8889 13.25 11.6797 12.7744 12.1357 12.0379C12.3537 11.6857 12.8159 11.5769 13.1681 11.7949C13.5203 12.0129 13.6291 12.4752 13.4111 12.8274C12.7004 13.9754 11.443 14.75 10 14.75C8.557 14.75 7.29956 13.9754 6.58891 12.8274C6.3709 12.4752 6.47968 12.0129 6.83188 11.7949Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeySmileyLinearLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2.75C6.99593 2.75 3.75 5.99593 3.75 10C3.75 14.0041 6.99593 17.25 11 17.25C15.0041 17.25 18.25 14.0041 18.25 10C18.25 5.99593 15.0041 2.75 11 2.75ZM2.25 10C2.25 5.16751 6.16751 1.25 11 1.25C15.8325 1.25 19.75 5.16751 19.75 10C19.75 14.8325 15.8325 18.75 11 18.75C6.16751 18.75 2.25 14.8325 2.25 10ZM7.85 7.6C7.85 7.18579 8.18579 6.85 8.6 6.85H8.67969C9.0939 6.85 9.42969 7.18579 9.42969 7.6V7.66406C9.42969 8.07828 9.0939 8.41406 8.67969 8.41406H8.6C8.18579 8.41406 7.85 8.07828 7.85 7.66406V7.6ZM12.65 7.6C12.65 7.18579 12.9858 6.85 13.4 6.85H13.4708C13.8851 6.85 14.2208 7.18579 14.2208 7.6V7.66406C14.2208 8.07828 13.8851 8.41406 13.4708 8.41406H13.4C12.9858 8.41406 12.65 8.07828 12.65 7.66406V7.6ZM7.83188 11.7949C8.18408 11.5769 8.64633 11.6857 8.86434 12.0379C9.32026 12.7744 10.1111 13.25 11 13.25C11.8889 13.25 12.6797 12.7744 13.1357 12.0379C13.3537 11.6857 13.8159 11.5769 14.1681 11.7949C14.5203 12.0129 14.6291 12.4752 14.4111 12.8274C13.7004 13.9754 12.443 14.75 11 14.75C9.557 14.75 8.29956 13.9754 7.58891 12.8274C7.3709 12.4752 7.47968 12.0129 7.83188 11.7949Z"
      fill="#020617"
    />
  </svg>
);

const PasskeySmileyFilledLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.59994 6.8501C7.18572 6.8501 6.84994 7.18588 6.84994 7.6001V7.66416C6.84994 8.07837 7.18572 8.41416 7.59994 8.41416H7.67962C8.09384 8.41416 8.42962 8.07837 8.42962 7.66416V7.6001C8.42962 7.18588 8.09384 6.8501 7.67962 6.8501H7.59994ZM12.3999 6.8501C11.9857 6.8501 11.6499 7.18588 11.6499 7.6001V7.66416C11.6499 8.07837 11.9857 8.41416 12.3999 8.41416H12.4708C12.885 8.41416 13.2208 8.07837 13.2208 7.66416V7.6001C13.2208 7.18588 12.885 6.8501 12.4708 6.8501H12.3999ZM7.86427 12.038C7.64626 11.6858 7.18402 11.577 6.83182 11.795C6.47962 12.013 6.37084 12.4753 6.58885 12.8275C7.29949 13.9755 8.55694 14.7501 9.99994 14.7501C11.4429 14.7501 12.7004 13.9755 13.411 12.8275C13.629 12.4753 13.5203 12.013 13.1681 11.795C12.8159 11.577 12.3536 11.6858 12.1356 12.038C11.6797 12.7745 10.8889 13.2501 9.99994 13.2501C9.11101 13.2501 8.3202 12.7745 7.86427 12.038Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeySmileyFlatLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity="0.2" cx="10" cy="10" r="8" fill="currentColor" />
    <path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 13.6588 4.45622 16.7439 7.8097 17.6965C7.04594 17.4686 6.35898 17.1094 5.80492 16.6258C3.56567 15.3141 4.15686 10.5832 6.97061 7.35925C9.78435 4.13533 14.0735 3.27448 15.9944 4.95098C18.4192 7.06728 18.8273 12.0278 16.0136 15.2517C14.1685 17.3658 11.3961 18.2081 9.02227 17.9409C9.34271 17.9799 9.66901 18 10 18Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.85004 7.6001C6.85004 7.18588 7.18583 6.8501 7.60004 6.8501H7.67973C8.09394 6.8501 8.42973 7.18588 8.42973 7.6001V7.66416C8.42973 8.07837 8.09394 8.41416 7.67973 8.41416H7.60004C7.18583 8.41416 6.85004 8.07837 6.85004 7.66416V7.6001ZM11.65 7.6001C11.65 7.18588 11.9858 6.8501 12.4 6.8501H12.4709C12.8851 6.8501 13.2209 7.18588 13.2209 7.6001V7.66416C13.2209 8.07837 12.8851 8.41416 12.4709 8.41416H12.4C11.9858 8.41416 11.65 8.07837 11.65 7.66416V7.6001ZM6.83192 11.795C7.18412 11.577 7.64637 11.6858 7.86438 12.038C8.3203 12.7745 9.11111 13.2501 10 13.2501C10.889 13.2501 11.6798 12.7745 12.1357 12.038C12.3537 11.6858 12.816 11.577 13.1682 11.795C13.5204 12.013 13.6291 12.4753 13.4111 12.8275C12.7005 13.9755 11.443 14.7501 10 14.7501C8.55705 14.7501 7.2996 13.9755 6.58895 12.8275C6.37094 12.4753 6.47972 12.013 6.83192 11.795Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeySmileyOutlineDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.75C5.99593 2.75 2.75 5.99593 2.75 10C2.75 14.0041 5.99593 17.25 10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99593 14.0041 2.75 10 2.75ZM1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10ZM6.85 7.6C6.85 7.18579 7.18579 6.85 7.6 6.85H7.67969C8.0939 6.85 8.42969 7.18579 8.42969 7.6V7.66406C8.42969 8.07828 8.0939 8.41406 7.67969 8.41406H7.6C7.18579 8.41406 6.85 8.07828 6.85 7.66406V7.6ZM11.65 7.6C11.65 7.18579 11.9858 6.85 12.4 6.85H12.4708C12.8851 6.85 13.2208 7.18579 13.2208 7.6V7.66406C13.2208 8.07828 12.8851 8.41406 12.4708 8.41406H12.4C11.9858 8.41406 11.65 8.07828 11.65 7.66406V7.6ZM6.83188 11.7949C7.18408 11.5769 7.64633 11.6857 7.86434 12.0379C8.32026 12.7744 9.11107 13.25 10 13.25C10.8889 13.25 11.6797 12.7744 12.1357 12.0379C12.3537 11.6857 12.8159 11.5769 13.1681 11.7949C13.5203 12.0129 13.6291 12.4752 13.4111 12.8274C12.7004 13.9754 11.443 14.75 10 14.75C8.557 14.75 7.29956 13.9754 6.58891 12.8274C6.3709 12.4752 6.47968 12.0129 6.83188 11.7949Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeySmileyLinearDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2.75C6.99593 2.75 3.75 5.99593 3.75 10C3.75 14.0041 6.99593 17.25 11 17.25C15.0041 17.25 18.25 14.0041 18.25 10C18.25 5.99593 15.0041 2.75 11 2.75ZM2.25 10C2.25 5.16751 6.16751 1.25 11 1.25C15.8325 1.25 19.75 5.16751 19.75 10C19.75 14.8325 15.8325 18.75 11 18.75C6.16751 18.75 2.25 14.8325 2.25 10ZM7.85 7.6C7.85 7.18579 8.18579 6.85 8.6 6.85H8.67969C9.0939 6.85 9.42969 7.18579 9.42969 7.6V7.66406C9.42969 8.07828 9.0939 8.41406 8.67969 8.41406H8.6C8.18579 8.41406 7.85 8.07828 7.85 7.66406V7.6ZM12.65 7.6C12.65 7.18579 12.9858 6.85 13.4 6.85H13.4708C13.8851 6.85 14.2208 7.18579 14.2208 7.6V7.66406C14.2208 8.07828 13.8851 8.41406 13.4708 8.41406H13.4C12.9858 8.41406 12.65 8.07828 12.65 7.66406V7.6ZM7.83188 11.7949C8.18408 11.5769 8.64633 11.6857 8.86434 12.0379C9.32026 12.7744 10.1111 13.25 11 13.25C11.8889 13.25 12.6797 12.7744 13.1357 12.0379C13.3537 11.6857 13.8159 11.5769 14.1681 11.7949C14.5203 12.0129 14.6291 12.4752 14.4111 12.8274C13.7004 13.9754 12.443 14.75 11 14.75C9.557 14.75 8.29956 13.9754 7.58891 12.8274C7.3709 12.4752 7.47968 12.0129 7.83188 11.7949Z"
      fill="white"
    />
  </svg>
);

const PasskeySmileyFilledDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.59994 6.8501C7.18572 6.8501 6.84994 7.18588 6.84994 7.6001V7.66416C6.84994 8.07837 7.18572 8.41416 7.59994 8.41416H7.67962C8.09384 8.41416 8.42962 8.07837 8.42962 7.66416V7.6001C8.42962 7.18588 8.09384 6.8501 7.67962 6.8501H7.59994ZM12.3999 6.8501C11.9857 6.8501 11.6499 7.18588 11.6499 7.6001V7.66416C11.6499 8.07837 11.9857 8.41416 12.3999 8.41416H12.4708C12.885 8.41416 13.2208 8.07837 13.2208 7.66416V7.6001C13.2208 7.18588 12.885 6.8501 12.4708 6.8501H12.3999ZM7.86427 12.038C7.64626 11.6858 7.18402 11.577 6.83182 11.795C6.47962 12.013 6.37084 12.4753 6.58885 12.8275C7.29949 13.9755 8.55694 14.7501 9.99994 14.7501C11.4429 14.7501 12.7004 13.9755 13.411 12.8275C13.629 12.4753 13.5203 12.013 13.1681 11.795C12.8159 11.577 12.3536 11.6858 12.1356 12.038C11.6797 12.7745 10.8889 13.2501 9.99994 13.2501C9.11101 13.2501 8.3202 12.7745 7.86427 12.038Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeySmileyFlatDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle opacity="0.2" cx="10" cy="10" r="8" fill="#9AB7FF" />
    <path
      opacity="0.2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 13.6588 4.45622 16.7439 7.8097 17.6965C7.04594 17.4686 6.35898 17.1094 5.80492 16.6258C3.56567 15.3141 4.15686 10.5832 6.97061 7.35925C9.78435 4.13533 14.0735 3.27448 15.9944 4.95098C18.4192 7.06728 18.8273 12.0278 16.0136 15.2517C14.1685 17.3658 11.3961 18.2081 9.02227 17.9409C9.34271 17.9799 9.66901 18 10 18Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.85004 7.6001C6.85004 7.18588 7.18583 6.8501 7.60004 6.8501H7.67973C8.09394 6.8501 8.42973 7.18588 8.42973 7.6001V7.66416C8.42973 8.07837 8.09394 8.41416 7.67973 8.41416H7.60004C7.18583 8.41416 6.85004 8.07837 6.85004 7.66416V7.6001ZM11.65 7.6001C11.65 7.18588 11.9858 6.8501 12.4 6.8501H12.4709C12.8851 6.8501 13.2209 7.18588 13.2209 7.6001V7.66416C13.2209 8.07837 12.8851 8.41416 12.4709 8.41416H12.4C11.9858 8.41416 11.65 8.07837 11.65 7.66416V7.6001ZM6.83192 11.795C7.18412 11.577 7.64637 11.6858 7.86438 12.038C8.3203 12.7745 9.11111 13.2501 10 13.2501C10.889 13.2501 11.6798 12.7745 12.1357 12.038C12.3537 11.6858 12.816 11.577 13.1682 11.795C13.5204 12.013 13.6291 12.4753 13.4111 12.8275C12.7005 13.9755 11.443 14.7501 10 14.7501C8.55705 14.7501 7.2996 13.9755 6.58895 12.8275C6.37094 12.4753 6.47972 12.013 6.83192 11.795Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldOutlineLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2486 3.02403C10.464 2.65866 9.53598 2.65866 8.75136 3.02403L3.75 5.35297V12.1439C3.75 12.8115 4.1829 13.6762 5.32808 14.7734C6.38778 15.7887 7.95188 16.9024 10.0011 18.1286C12.075 16.9016 13.6319 15.9136 14.6888 14.9615C15.7917 13.9679 16.25 13.1035 16.25 12.1439V5.35297L11.2486 3.02403ZM17.75 4.87495V12.1439C17.75 13.6942 16.9627 14.9319 15.6928 16.0759C14.4406 17.204 12.6236 18.327 10.3802 19.6465C10.1455 19.7845 9.85446 19.7845 9.61977 19.6465C7.34728 18.3099 5.53902 17.0529 4.29034 15.8565C3.06271 14.6803 2.25 13.4429 2.25 12.1439V4.87489C2.25 4.58327 2.41904 4.3181 2.6834 4.19499L8.11815 1.66423C9.30422 1.11192 10.6958 1.11192 11.8819 1.66423L17.3166 4.19499C17.581 4.3181 17.75 4.58333 17.75 4.87495ZM13.4655 7.62338C13.7478 7.9265 13.7309 8.40107 13.4278 8.68337L9.92782 11.943C9.63983 12.2112 9.19351 12.2112 8.90552 11.943L7.15552 10.3132C6.8524 10.0309 6.83553 9.55632 7.11783 9.2532C7.40013 8.95009 7.8747 8.93321 8.17782 9.21551L9.41667 10.3693L12.4055 7.58569C12.7086 7.30339 13.1832 7.32027 13.4655 7.62338Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldLinearLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2486 2.02403C11.464 1.65866 10.536 1.65866 9.75136 2.02403L4.75 4.35297V11.1439C4.75 11.8115 5.1829 12.6762 6.32808 13.7734C7.38778 14.7887 8.95188 15.9024 11.0011 17.1286C13.075 15.9016 14.6319 14.9136 15.6888 13.9615C16.7917 12.9679 17.25 12.1035 17.25 11.1439V4.35297L12.2486 2.02403ZM18.75 3.87495V11.1439C18.75 12.6942 17.9627 13.9319 16.6928 15.0759C15.4406 16.204 13.6236 17.327 11.3802 18.6465C11.1455 18.7845 10.8545 18.7845 10.6198 18.6465C8.34728 17.3099 6.53902 16.0529 5.29034 14.8565C4.06271 13.6803 3.25 12.4429 3.25 11.1439V3.87489C3.25 3.58327 3.41904 3.3181 3.6834 3.19499L9.11815 0.664231C10.3042 0.111923 11.6958 0.111923 12.8819 0.664231L18.3166 3.19499C18.581 3.3181 18.75 3.58333 18.75 3.87495ZM14.4655 6.62338C14.7478 6.9265 14.7309 7.40107 14.4278 7.68337L10.9278 10.943C10.6398 11.2112 10.1935 11.2112 9.90552 10.943L8.15552 9.31319C7.8524 9.03089 7.83553 8.55632 8.11783 8.2532C8.40013 7.95009 8.8747 7.93321 9.17782 8.21551L10.4167 9.36929L13.4055 6.58569C13.7086 6.30339 14.1832 6.32027 14.4655 6.62338Z"
      fill="#020617"
    />
  </svg>
);

const PasskeyShieldFilledLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.43475 2.34413C9.4201 1.88529 10.5799 1.88529 11.5652 2.34413L17 4.87489V12.1439C17 14.6538 14.5088 16.3481 10 19C5.49122 16.3481 3 14.1105 3 12.1439V4.87489L8.43475 2.34413ZM13.2437 9.17483C13.5854 8.85658 13.5854 8.34061 13.2437 8.02237C12.902 7.70413 12.348 7.70413 12.0063 8.02237L9.125 10.7058L7.99372 9.65219C7.65201 9.33395 7.09799 9.33395 6.75628 9.65219C6.41457 9.97043 6.41457 10.4864 6.75628 10.8046L8.50628 12.4345C8.84799 12.7527 9.40201 12.7527 9.74372 12.4345L13.2437 9.17483Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldFlatLight = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#363FF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.2"
      d="M11.5652 2.34413C10.5799 1.88529 9.4201 1.88529 8.43475 2.34413L3 4.87489V12.1439C3 14.1105 5.49122 16.3481 10 19C14.5088 16.3481 17 14.6538 17 12.1439C17 9.63397 17 4.87489 17 4.87489L11.5652 2.34413Z"
      fill="currentColor"
    />
    <path
      opacity="0.2"
      d="M8.43475 2.36903C9.4201 1.91019 10.5799 1.91019 11.5652 2.36903L15.1225 4.02551C9.08071 4.3637 4.27859 8.98418 4.1686 14.6716C3.39968 13.7877 3 12.9565 3 12.1688V4.89979L8.43475 2.36903Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6324 8.02237C13.9741 8.34062 13.9741 8.85659 13.6324 9.17483L10.1324 12.4345C9.79068 12.7527 9.23666 12.7527 8.89495 12.4345L7.14495 10.8047C6.80324 10.4864 6.80324 9.97044 7.14495 9.65219C7.48666 9.33395 8.04068 9.33395 8.38239 9.65219L9.51367 10.7058L12.395 8.02237C12.7367 7.70413 13.2907 7.70413 13.6324 8.02237Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldOutlineDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2486 3.02403C10.464 2.65866 9.53598 2.65866 8.75136 3.02403L3.75 5.35297V12.1439C3.75 12.8115 4.1829 13.6762 5.32808 14.7734C6.38778 15.7887 7.95188 16.9024 10.0011 18.1286C12.075 16.9016 13.6319 15.9136 14.6888 14.9615C15.7917 13.9679 16.25 13.1035 16.25 12.1439V5.35297L11.2486 3.02403ZM17.75 4.87495V12.1439C17.75 13.6942 16.9627 14.9319 15.6928 16.0759C14.4406 17.204 12.6235 18.327 10.3802 19.6465C10.1455 19.7845 9.85446 19.7845 9.61977 19.6465C7.34728 18.3099 5.53902 17.0529 4.29034 15.8565C3.06271 14.6803 2.25 13.4429 2.25 12.1439V4.87489C2.25 4.58327 2.41904 4.3181 2.6834 4.19499L8.11815 1.66423C9.30422 1.11192 10.6958 1.11192 11.8819 1.66423L17.3166 4.19499C17.581 4.3181 17.75 4.58333 17.75 4.87495ZM13.4655 7.62338C13.7478 7.9265 13.7309 8.40107 13.4278 8.68337L9.92782 11.943C9.63983 12.2112 9.19351 12.2112 8.90552 11.943L7.15552 10.3132C6.8524 10.0309 6.83553 9.55632 7.11783 9.2532C7.40013 8.95009 7.8747 8.93321 8.17782 9.21551L9.41667 10.3693L12.4055 7.58569C12.7086 7.30339 13.1832 7.32027 13.4655 7.62338Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldLinearDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2486 2.02403C11.464 1.65866 10.536 1.65866 9.75136 2.02403L4.75 4.35297V11.1439C4.75 11.8115 5.1829 12.6762 6.32808 13.7734C7.38778 14.7887 8.95188 15.9024 11.0011 17.1286C13.075 15.9016 14.6319 14.9136 15.6888 13.9615C16.7917 12.9679 17.25 12.1035 17.25 11.1439V4.35297L12.2486 2.02403ZM18.75 3.87495V11.1439C18.75 12.6942 17.9627 13.9319 16.6928 15.0759C15.4406 16.204 13.6235 17.327 11.3802 18.6465C11.1455 18.7845 10.8545 18.7845 10.6198 18.6465C8.34728 17.3099 6.53902 16.0529 5.29034 14.8565C4.06271 13.6803 3.25 12.4429 3.25 11.1439V3.87489C3.25 3.58327 3.41904 3.3181 3.6834 3.19499L9.11815 0.664231C10.3042 0.111923 11.6958 0.111923 12.8819 0.664231L18.3166 3.19499C18.581 3.3181 18.75 3.58333 18.75 3.87495ZM14.4655 6.62338C14.7478 6.9265 14.7309 7.40107 14.4278 7.68337L10.9278 10.943C10.6398 11.2112 10.1935 11.2112 9.90552 10.943L8.15552 9.31319C7.8524 9.03089 7.83553 8.55632 8.11783 8.2532C8.40013 7.95009 8.8747 7.93321 9.17782 8.21551L10.4167 9.36929L13.4055 6.58569C13.7086 6.30339 14.1832 6.32027 14.4655 6.62338Z"
      fill="white"
    />
  </svg>
);

const PasskeyShieldFilledDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.43475 2.34413C9.4201 1.88529 10.5799 1.88529 11.5652 2.34413L17 4.87489V12.1439C17 14.6538 14.5088 16.3481 10 19C5.49122 16.3481 3 14.1105 3 12.1439V4.87489L8.43475 2.34413ZM13.2437 9.17483C13.5854 8.85658 13.5854 8.34061 13.2437 8.02237C12.902 7.70413 12.348 7.70413 12.0063 8.02237L9.125 10.7058L7.99372 9.65219C7.65201 9.33395 7.09799 9.33395 6.75628 9.65219C6.41457 9.97043 6.41457 10.4864 6.75628 10.8046L8.50628 12.4345C8.84799 12.7527 9.40201 12.7527 9.74372 12.4345L13.2437 9.17483Z"
      fill="currentColor"
    />
  </svg>
);

const PasskeyShieldFlatDark = ({
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="#9AB7FF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.2"
      d="M11.5652 2.34413C10.5799 1.88529 9.4201 1.88529 8.43475 2.34413L3 4.87489V12.1439C3 14.1105 5.49122 16.3481 10 19C14.5088 16.3481 17 14.6538 17 12.1439C17 9.63397 17 4.87489 17 4.87489L11.5652 2.34413Z"
      fill="currentColor"
    />
    <path
      opacity="0.2"
      d="M8.43475 2.36903C9.4201 1.91019 10.5799 1.91019 11.5652 2.36903L15.1225 4.02551C9.08071 4.3637 4.27859 8.98418 4.1686 14.6716C3.39968 13.7877 3 12.9565 3 12.1688V4.89979L8.43475 2.36903Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6324 8.02237C13.9741 8.34062 13.9741 8.85659 13.6324 9.17483L10.1324 12.4345C9.79068 12.7527 9.23666 12.7527 8.89495 12.4345L7.14495 10.8046C6.80324 10.4864 6.80324 9.97044 7.14495 9.65219C7.48666 9.33395 8.04068 9.33395 8.38239 9.65219L9.51367 10.7058L12.395 8.02237C12.7367 7.70413 13.2907 7.70413 13.6324 8.02237Z"
      fill="currentColor"
    />
  </svg>
);