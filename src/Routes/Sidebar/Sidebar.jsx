const Sidebar = ({ categories, activeCategory, onCategorySelect }) => {
  return (
    <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible whitespace-nowrap scrollbar-hide">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategorySelect(category)}
          className={
            activeCategory === category
              ? "text-white bg-purple-600 px-6 py-3 rounded-full font-medium w-full md:w-full text-left transition-all duration-300"
              : "px-6 py-3 text-purple-700 bg-gray-100 hover:bg-purple-200 rounded-full transition-all duration-300 w-full md:w-full text-left"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
