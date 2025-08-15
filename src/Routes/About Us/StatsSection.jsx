const StatsSection = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "25+", label: "Countries" },
    { number: "5", label: "Years Experience" },
  ];

  return (
    <div className="bg-purple-700 text-white py-16">
      <div className="container  max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </p>
              <p className="text-purple-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
