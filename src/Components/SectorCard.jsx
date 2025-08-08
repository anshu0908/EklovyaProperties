const SectorCard = ({ name, description, image }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    // Toggle for mobile (tap)
    setHovered(prev => !prev);
  };

  return (
    <div
      // Desktop hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Mobile tap
      onClick={toggleHover}
      className="relative bg-gray-100 p-6 sm:p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 transition-all duration-300 cursor-pointer"
    >
      <div className="flex-1 w-full">
        <p
          className={`text-sm sm:text-base md:text-lg transition-colors duration-300 ${
            hovered ? "text-black font-medium" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 ${
            hovered ? "text-black" : "text-gray-500"
          }`}
        >
          {name}
        </h3>

        {hovered && (
          <img
            src={image}
            alt={name}
            className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 object-cover rounded-lg transition-all duration-300 shadow-md"
          />
        )}
      </div>

      <div
        className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-300 ${
          hovered ? "w-[60%] sm:w-[70%] md:w-[80%] opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};
