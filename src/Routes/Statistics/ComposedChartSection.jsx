import Chart from "./Chart";

const ComposedChartSection = ({ gadgetsData }) => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="container max-w-5xl px-4 md:px-8 mx-auto pt-6 md:pt-12 pb-12 md:pb-18 lg:pb-24">
        <h2 className="text-2xl font-bold mb-8">Statistics</h2>

        {/* Enhanced scrollable container similar to sidebar */}
        <div className="w-full bg-white shadow-lg rounded-lg p-4">
          <Chart gadgetsData={gadgetsData} />
        </div>
      </div>
    </div>
  );
};

export default ComposedChartSection;
