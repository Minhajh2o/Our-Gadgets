import Chart from "./Chart";

const ComposedChartSection = ({ gadgetsData }) => {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="container max-w-5xl px-4 md:px-8 mx-auto pt-6 md:pt-12 pb-12 md:pb-18 lg:pb-24">
        <h2 className="text-2xl font-bold mb-8">Statistics</h2>
        {/* Chart Section */}
        <div className=" bg-white shadow-lg rounded-lg ">
          <Chart gadgetsData={gadgetsData} />
        </div>
      </div>
    </div>
  );
};

export default ComposedChartSection;
