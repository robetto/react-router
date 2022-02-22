import React from "react";

export const IfLogged = ({children}) => {
  return !!localStorage.getItem('isLogged') ?
  <>{children}</> :
    null;
}
