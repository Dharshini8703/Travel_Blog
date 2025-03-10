import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { useDestinations } from '../context/DestinationsContext';

const Home = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { destinations } = useDestinations();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  useEffect(() => {
    let filtered = destinations;
    
    // Filter by category if present in URL
    if (categoryParam) {
      filtered = filtered.filter(dest => dest.category === categoryParam);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(term) || 
        dest.location.toLowerCase().includes(term) ||
        dest.shortDescription.toLowerCase().includes(term)
      );
    }
    
    setFilteredDestinations(filtered);
  }, [destinations, categoryParam, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto">
      {categoryParam && 
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          { `${categoryParam} Destinations` }
        </h3>
      
      </div>}

      {/* Search bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No destinations found. Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
