import { ActiveTabProvider } from "./ActiveTabContext";
import DashboardDetails from "./DashboardDetails";
import DashboardWidgets from "./DashboardWidgets";

const Dashboard = () => {
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