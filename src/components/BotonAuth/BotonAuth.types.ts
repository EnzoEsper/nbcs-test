export interface BotonAuthProps {
  loginWithRedirect: () => void;
  logout: () => void;
  userIsAuthenticated: boolean;
}
