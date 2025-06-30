const tags = ["Level 60+", "AK Coins", "Rare Skins", "India", "Sniper Master"];

const CategoryTags = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tags.map((tag, i) => (
        <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default CategoryTags;
