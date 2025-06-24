import { Search } from "lucide-react";
import { useState } from "react";

export const searchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  const popularSearches = [
    "Laptops",
    "Headphones",
    "Smartphones",
    "Gaming",
    "Fashion",
  ];

  return (
    <>
      {/* Main Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands, or categories..."
              className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full font-semibold transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
