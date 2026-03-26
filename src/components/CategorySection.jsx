import MenCategory from "../assets/images/men.jpg";
import WomanCategory from "../assets/images/woman.jpg";
import KidCategory from "../assets/images/kid.jpg";

const categories = [
  { title: "Men", imageUrl: MenCategory },
  { title: "Women", imageUrl: WomanCategory },
  { title: "Kids", imageUrl: KidCategory },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
      
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
        >
          {/* IMAGE */}
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute bottom-8 left-6 text-white">
            <h2 className="text-2xl font-bold tracking-wide">
              {category.title}
            </h2>

            {/* BUTTON */}
            <button className="mt-2 text-sm font-medium relative cursor-pointer group">
              View Collection
              <span className="block h-[2px] w-0 bg-white mt-1 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
