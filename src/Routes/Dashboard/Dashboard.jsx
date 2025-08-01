import { useLoaderData } from "react-router-dom";
import { ActiveTabProvider } from "../Context/ActiveTabContext";
import DashboardDetails from "./DashboardDetails";
import DashboardWidgets from "./DashboardWidgets";

const Dashboard = () => {
  const data = useLoaderData();
  console.log("Dashboard data:", data);

  return (
    <ActiveTabProvider>
      <section>
        {/* Dashboard Content */}
        <DashboardDetails />

        {/* Dashboard Widgets */}
        <DashboardWidgets />
      </section>
    </ActiveTabProvider>
  );
};

export default Dashboard;