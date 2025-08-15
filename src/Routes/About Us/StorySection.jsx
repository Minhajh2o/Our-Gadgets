import { HiOutlineUsers } from "react-icons/hi";

const StorySection = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto md:px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2019 by a team of tech enthusiasts, Our Gadgets started
              as a small online store with a big dream: to make cutting-edge
              technology accessible to everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              What began as a passion project has grown into a trusted
              destination for tech lovers worldwide. We carefully curate every
              product in our catalog, ensuring that our customers receive only
              the highest quality gadgets and accessories.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to serve over 50,000 satisfied customers across
              25 countries, and we're just getting started.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop"
              alt="Our Story"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-purple-700 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <HiOutlineUsers className="w-8 h-8" />
                <div>
                  <p className="font-bold text-2xl">50K+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
