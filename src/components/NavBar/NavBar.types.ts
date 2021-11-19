export interface NavBarProps {
  userIsAuthenticated: boolean;
  userScopes: string[];
  mainNavTabs?: MainNavTab[];
  logoUrl: string;
  logout: () => void;
  logoutReturnUrl: string;
  loginWithRedirect: () => void;
  userPicture: string;
}

export interface MainNavTab {
  label: string;
  value: string;
  path: string;
  scopes: string[];
}
