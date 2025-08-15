import { useLoaderData } from "react-router-dom";
import StatisticsDetails from "./StatisticsDetails";
import ComposedChartSection from "./ComposedChartSection";
import { Helmet } from "react-helmet";

const Statistics = () => {
    const gadgetsData = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Statistics | Our Gadgets</title>
            </Helmet>

            <StatisticsDetails />
            {/* <Composed Chart /> */}
            <ComposedChartSection gadgetsData={gadgetsData} />
        </div>
    );
};

export default Statistics;