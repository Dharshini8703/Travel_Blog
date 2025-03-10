import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Star } from 'lucide-react';
import { useDestinations } from '../context/DestinationsContext';

const DestinationDetail = () => {
  const { id } = useParams();
  const { getDestinationById } = useDestinations();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundDestination = getDestinationById(id);
      setDestination(foundDestination);
      setLoading(false);
    }
  }, [id, getDestinationById]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination not found</h2>
        <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to all destinations
      </Link>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-80">
          <img 
            src={destination.imageUrl} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-primary">
            {destination.category}
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{destination.name}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="h-5 w-5 mr-1" />
            <span>{destination.location}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Best time to visit</p>
                <p className="font-medium">{destination.bestTimeToVisit}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Ideal duration</p>
                <p className="font-medium">{destination.idealDuration}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg flex items-center">
              <Star className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-medium">{destination.rating}/5</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">About</h2>
            <div className="prose max-w-none text-gray-600">
              {destination.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          {destination.attractions && destination.attractions.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Attractions</h2>
              <ul className="space-y-2">
                {destination.attractions.map((attraction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-light text-primary text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {destination.tips && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">Travel Tips</h2>
              <p className="text-blue-700">{destination.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
