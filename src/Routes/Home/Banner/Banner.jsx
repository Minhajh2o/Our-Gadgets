import bannerImage from "../../../assets/banner.jpg";

const Banner = () => {
    return (
        <header className="relative bg-purple-700 text-center text-white pt-6 lg:pt-12 pb-24 md:pb-28 lg:pb-48 px-4 rounded-b-2xl mb-40 md:mb-48 lg:mb-52 xl:mb-72 2xl:mb-96">

        {/* Banner Text Content */}
        <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold max-w-4xl mx-auto leading-tight">
          Upgrade Your Tech Accessories with Our Gadget Accessories
        </h1>
        <p className="max-w-2xl px-6 mx-auto mt-4 mb-8 text-gray-200">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn bg-white text-purple-700 rounded-full hover:bg-purple-100 border-none mb-8 md:mb-12">
          Shop Now
        </button>

        {/* Banner Image */}
        <div className="max-w-3xl min-w-72 p-4 mx-auto border-2 border-slate-100 bg-transparent backdrop-blur-xl rounded-xl shadow-xl absolute left-1/2 transform -translate-x-1/2 z-10">
          <img
            src={bannerImage}
            alt="VR Headset"
            className="w-full rounded-2xl"
          />
        </div>
      </header>
    );
};

export default Banner;