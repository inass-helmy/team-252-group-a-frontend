import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PrivateRoute.js";
import Login from "./containers/shared/Login/Login";

import Signup from "./containers/buyer/signup/Signup"

import SellerDashboard from './components/sellerDashboard/sellerDashboard';


const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="bg-primary flex min-h-screen max-h-full">
          <Route exact path="/" component={Login} />

          <Route exact path="/buyer/signup" component={Signup} />
          <Route exact path="/seller/signup" component={Signup} />

          <Route  exact path="/seller_dashboard" component={SellerDashboard} />

          {/* <PrivateRoute exact path="" component={} /> */}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
