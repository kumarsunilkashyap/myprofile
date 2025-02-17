import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";


import LogoutPage from "./Pages/LogoutPage";
import SettingsPage from "./Pages/Setting";
import TransactionPage from "./Pages/TranscationPage";
import DashboardContent from "./Pages/DashboardContent";
const router = createBrowserRouter([
  {
    path: "/myprofile/",
    element: <Layout />,
    children: [
      {
        path: "/myprofile/dashboard", // Matches /project/
        element: <DashboardContent />,
      },
      {
        path: "/myprofile/setting", // Matches /project/
        element: <Setting />,
      },
      {
        path: "/myprofile/logout", // Matches /project/
        element: <LogoutPage />,
      },
      {
        path: "/myprofile/setting", // Matches /project/
        element: <SettingsPage />,
      },
      {
        path: "/myprofile/transcation", // Matches /project/
        element: <TransactionPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
