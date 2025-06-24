import { ShoppingBag, Star, TrendingUp } from "lucide-react";

export const Stars = () => {
  return (
    <>
      {/* Stats/Trust Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12  mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <ShoppingBag className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">1k+</span>
          </div>
          <p className="text-sm text-gray-600">Products</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">4.9</span>
          </div>
          <p className="text-sm text-gray-600">Rating</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">50K+</span>
          </div>
          <p className="text-sm text-gray-600">Daily Orders</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl font-bold text-gray-900">24/7</span>
          </div>
          <p className="text-sm text-gray-600">Support</p>
        </div>
      </div>
    </>
  );
};
