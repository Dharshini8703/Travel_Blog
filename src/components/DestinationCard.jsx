import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <Link 
      to={`/destination/${destination.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-primary">
          {destination.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{destination.name}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{destination.location}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{destination.shortDescription}</p>
      </div>
    </Link>
  );
};

export default DestinationCard;
