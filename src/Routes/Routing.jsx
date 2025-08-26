import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from '../pages/Home'
import Login from "../pages/admin/login/Login";
import App from "../App";
import VerifyEmail from "../pages/admin/verifyEmail/VerifyEmail";
import RecoverAccount from "../pages/admin/recoverAccount/RecoverAccount";

import Layout from "../pages/admin/components/layout/Layout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import UserManagement from "../pages/admin/userManagement/userManagement";
import InviteUsers from "../pages/admin/userManagement/InviteUsers";
import ServiceProvider from "../pages/admin/serviceProvider/ServiceProvider";
import ActivityLogs from "../pages/admin/activityLogs/ActivityLogs";
import Disputes from "../pages/admin/serviceProvider/Disputes";
import DisputeDetails from "../pages/admin/serviceProvider/DisputeDetails";
import HealthcareProvider from "../pages/admin/healthcareProvider/HealthcareProvider";
// import CreateAccount from "../pages/admin/createAccount/createAccount";

function Routing() {
  return (
  <>

    <Routes>
      <Route path="/" default element={<App />} />
      <Route path="/admin/login" element={<Login />} />
      {/* <Route path="/admin/create-account" element={<CreateAccount />} /> */}
      <Route path="/admin/verify-account" element={<VerifyEmail />} />
      <Route path="/admin/recover-account" element={<RecoverAccount />} />


      <Route path="/admin" element={<Layout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/user-management/invite-user" element={<InviteUsers />} />
        <Route path="/admin/service-providers" element={<ServiceProvider />} />
        <Route path="/admin/activity-logs" element={<ActivityLogs />} />
  <Route path="/admin/service-provider/disputes" element={<Disputes />} />
  <Route path="/admin/service-provider/disputes/:id" element={<DisputeDetails />} />
  <Route path="/admin/healthcare-provider" element={<HealthcareProvider />} />
      </Route>
    </Routes>

  </>
  );
}

export default Routing;
