import { useLoaderData } from "react-router-dom";
import StatisticsDetails from "./StatisticsDetails";
import ComposedChartSection from "./ComposedChartSection";

const Statistics = () => {
    const gadgetsData = useLoaderData();
    return (
        <div>
            <StatisticsDetails />
            {/* <Composed Chart /> */}
            <ComposedChartSection gadgetsData={gadgetsData} />
        </div>
    );
};

export default Statistics;