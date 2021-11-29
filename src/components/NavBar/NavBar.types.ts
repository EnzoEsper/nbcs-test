import { RedirectLoginOptions } from "@auth0/auth0-react";

export interface NavBarProps {
  userIsAuthenticated: boolean;
  userScopes: string[];
  mainNavTabs?: MainNavTab[];
  logoUrl: string;
  logout: () => void;
  logoutReturnUrl: string;
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
  userPicture: undefined | string;
}

export interface MainNavTab {
  label: string;
  value: string;
  path: string;
  scopes: string[];
}
