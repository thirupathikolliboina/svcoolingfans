import React from "react";

interface ProductCardProps {
  // title: string;
  // description: string;
  imageUrl: string;
  features: string[];
  specs?: {
    sweep?: string;
    speed?: string;
    powerInput?: string;
    airDelivery?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  // title,
  // description,
  imageUrl,
  features,
  specs,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          // alt={title}
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* <button className="btn btn-primary transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            View Details
          </button> */}
        </div>
      </div>

      <div className="p-6">
        {/* <h3 className="heading-sm mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p> */}

        <div className="space-y-4">
          {specs && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">
                Specifications:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {specs.sweep && (
                  <>
                    <span className="text-gray-600">Sweep:</span>
                    <span className="font-medium">{specs.sweep}</span>
                  </>
                )}
                {specs.speed && (
                  <>
                    <span className="text-gray-600">Speed:</span>
                    <span className="font-medium">{specs.speed}</span>
                  </>
                )}
                {specs.powerInput && (
                  <>
                    <span className="text-gray-600">Power Input:</span>
                    <span className="font-medium">{specs.powerInput}</span>
                  </>
                )}
                {specs.airDelivery && (
                  <>
                    <span className="text-gray-600">Air Delivery:</span>
                    <span className="font-medium">{specs.airDelivery}</span>
                  </>
                )}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
