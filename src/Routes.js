import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute.js";
import Login from "./containers/shared/Login/Login";

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="bg-primary flex min-h-screen max-h-full">
          <Route exact path="/" component={Login} />
          {/* <PrivateRoute exact path="" component={} /> */}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
