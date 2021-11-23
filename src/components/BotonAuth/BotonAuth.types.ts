import { RedirectLoginOptions } from "@auth0/auth0-react";

export interface BotonAuthProps {
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
  logout: () => void;
  userIsAuthenticated: boolean;
}
