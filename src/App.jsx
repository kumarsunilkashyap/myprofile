import Layout from "../Layout";
import "./App.css";

import HomePage from "./Pages/DashboardContent";
import LoginPage from "./Pages/LoginPage";
import LogoutPage from "./Pages/LogoutPage";
import SettingsPage from "./Pages/Setting";
import TransactionPage from "./Pages/TranscationPage";

function App() {
  return (
    <>
    
      <Layout />
      <HomePage />
      <SettingsPage />
      <TransactionPage />
      <LoginPage />
      <LogoutPage />
    </>
  );
}

export default App;
