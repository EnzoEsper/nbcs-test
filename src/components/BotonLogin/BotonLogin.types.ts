import { RedirectLoginOptions } from "@auth0/auth0-react";
export interface BotonLoginProps {
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
}
