// @noErrors
import { createConfig, cookieStorage } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { alchemy, sepolia } from "@account-kit/infra";
 
export const config = createConfig(
  {
    // alchemy config
    transport: alchemy({ apiKey: "snfXu5PjRBUjH0osYuXKUN8xqyI7SkPQ" }),
     // TODO: add your Alchemy API key - setup your app and embedded account config in the alchemy dashboard (https://dashboard.alchemy.com/accounts)
    chain: sepolia, // TODO: specify your preferred chain here and update imports from @account-kit/infra
    ssr: true,
   // Defers hydration to client, solving server-client state inconsistencies. (read more here: https://accountkit.alchemy.com/react/ssr)
   storage: cookieStorage, // persist account state using cookies (see https://accountkit.alchemy.com/react/ssr#persisting-the-account-state)
    enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
    // optional config to override default session manager config
    policyId: "07689b27-0f53-4b30-ad82-0f7644a93a2d",
    sessionConfig: {
      expirationTimeMs: 1000 * 60 * 60, // 60 minutes (default is 15 min)
    },
  },
  {
    // authentication ui config - your customizations here
    auth: {
      sections: [
        [{ type: "email" }],
        [
          { type: "passkey" },
          { type: "social", authProviderId: "google", mode: "popup" },
          { type: "social", authProviderId: "facebook", mode: "popup" },
        ],
        [
          {
            type: "external_wallets",
            walletConnect: { projectId: "cf869a38cfddcdcf00ee6d11868488f7" },
          },
        ],
      ],
      addPasskeyOnSignup: true,
      hideSignInText: false,  // <--- Renamed and set to false
    },
  }
);
 
export const queryClient = new QueryClient();