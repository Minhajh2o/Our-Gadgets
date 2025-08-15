import { useLoaderData } from "react-router-dom";
import { ActiveTabProvider } from "../Context/ActiveTabContext";
import DashboardDetails from "./DashboardDetails";
import DashboardWidgets from "./DashboardWidgets";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const gadgetsData = useLoaderData();
  console.log("Dashboard data:", gadgetsData);

  return (
    <ActiveTabProvider>
      <Helmet>
        <title>Dashboard | Our Gadgets</title>
      </Helmet>

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