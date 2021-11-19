import React from "react";

import BotonLogin from "../BotonLogin/BotonLogin";
import BotonLogout from "../BotonLogout/BotonLogout";

import { BotonAuthProps } from "./BotonAuth.types";

const BotonAuth = (props: BotonAuthProps) => {
  return props.userIsAuthenticated ? (
    <BotonLogout logout={() => props.logout()} />
  ) : (
    <BotonLogin loginWithRedirect={() => props.loginWithRedirect()} />
  );
};

export default BotonAuth;
