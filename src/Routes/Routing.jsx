import { Route, Routes } from "react-router-dom";
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
import Performance from "../pages/admin/serviceProvider/Performance";
import ReviewCredential from "../pages/admin/healthcareProvider/ReviewCredential";
import React from "react";
import MentalHealthScreeningDetail from "../pages/admin/healthcareProvider/MentalHealthScreeningDetail";
import MentalHealthScreening from "../pages/admin/healthcareProvider/MentalHealthScreening";

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
        {/* user management */}
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/activity-logs" element={<ActivityLogs />} />
        <Route path="/admin/user-management/invite-user" element={<InviteUsers />} />

        {/* service providers */}
        <Route path="/admin/service-providers" element={<ServiceProvider />} />
        <Route path="/admin/service-provider/disputes" element={<Disputes />} />
        <Route path="/admin/service-provider/performance" element={<Performance />} />
        <Route path="/admin/service-provider/disputes/:id" element={<DisputeDetails />} />

  {/* healthcare provider */}
  <Route path="/admin/healthcare-provider" element={<HealthcareProvider />} />
  <Route path="/admin/credentials-review" element={<ReviewCredential />} />
  {/* mental health screening */}
  <Route path="/admin/mental-health-screening" element={<MentalHealthScreening />} />
  <Route path="/admin/mental-health-screening/:id" element={<MentalHealthScreeningDetail />} />
      </Route>
    </Routes>

  </>
  );
}

export default Routing;
