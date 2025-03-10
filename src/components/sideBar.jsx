import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home as HomeIcon, Compass, Info, Menu, X } from 'lucide-react';
import { useDestinations } from '../context/DestinationsContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { categories } = useDestinations();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-5 border-b">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-800">தீரா உலா of Tamil Nadu</span>
            </Link>
            <p className='text-xs text-gray-700 ml-7 mt-1'>Endless Journey of Tamil Nadu</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className={`flex items-center p-2 rounded-md hover:bg-gray-100 ${
                    location.pathname === '/' && !location.search ? 'bg-gray-100 text-primary font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <HomeIcon className="h-5 w-5 mr-3" />
                  <span>Home</span>
                </Link>
              </li>

              <li className="pt-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                  Categories
                </div>
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/?category=${category}`}
                    className={`flex items-center p-2 rounded-md hover:bg-gray-100 ${
                      location.search === `?category=${category}` ? 'bg-gray-100 text-primary font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>{category}</span>
                  </Link>
                ))}
              </li>

              <li className="pt-4">
                <Link 
                  to="/about" 
                  className={`flex items-center p-2 rounded-md hover:bg-gray-100 ${
                    location.pathname === '/about' ? 'bg-gray-100 text-primary font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Info className="h-5 w-5 mr-3" />
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t text-sm text-gray-500">
            © 2025 தீரா உலா of Tamil Nadu
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
