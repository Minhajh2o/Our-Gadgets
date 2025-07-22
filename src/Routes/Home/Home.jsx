import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="px-4 md:px-8 bg-slate-100">
      <Banner />
      <h1 className="text-[28px] md:text-[40px] font-bold text-center pb-12 md:pb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="pb-12 md:pb-24">
        {/* Additional content can be added here */}
        
      </div>
    </div>
  );
};

export default Home;