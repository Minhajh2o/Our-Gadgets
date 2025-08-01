import { useLoaderData } from "react-router-dom";
import { ActiveTabProvider } from "../Context/ActiveTabContext";
import DashboardDetails from "./DashboardDetails";
import DashboardWidgets from "./DashboardWidgets";

const Dashboard = () => {
  const gadgetsData = useLoaderData();
  console.log("Dashboard data:", gadgetsData);

  return (
    <ActiveTabProvider>
      <section>
        {/* Dashboard Content */}
        <DashboardDetails />

        {/* Dashboard Widgets */}
        <DashboardWidgets gadgetsData={gadgetsData} />
      </section>
    </ActiveTabProvider>
  );
};

export default Dashboard;