import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: Layout, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      render={routeProps =>
        !!currentUser ? <Layout {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
