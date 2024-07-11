import { cookieStorage, createConfig } from "@account-kit/react";
import { sepolia } from "@account-kit/infra";
import { QueryClient } from "@tanstack/react-query";

export const config = createConfig(
  {
    apiKey: "YOUR_API_KEY", // TODO: add your Alchemy API key - setup your app and embedded account config in the alchemy dashboard (https://dashboard.alchemy.com/accounts)
    chain: sepolia, // TODO: import your chain from @account-kit/infra and ensure it matches the API key passed above
    ssr: true, // defers hydration of the account state to the client after the initial mount solving any inconsistencies between server and client state (read more here: https://accountkit.alchemy.com/react/ssr)
    storage: cookieStorage, // persist the account state using cookies (read more here: https://accountkit.alchemy.com/react/ssr#persisting-the-account-state)
  },
  {
    auth: {
      sections: [
        [{ type: "email" }],
        [{ type: "passkey" }],
        [{ type: "injected" }],
      ],
      addPasskeyOnSignup: true,
    },
  }
);

export const queryClient = new QueryClient();
