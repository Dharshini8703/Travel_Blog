import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DestinationDetail from './pages/DestinationDetail';
import { DestinationsProvider } from './context/DestinationsContext';
import About from './pages/About';

function App() {
  return (
    <DestinationsProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 md:ml-64"> {/* Add margin to offset sidebar width */}
            <main className="p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          { 'Explore Tamil Nadu'}
        </h1>
        <p className="text-gray-600">
          Discover the beauty, culture, and heritage of Tamil Nadu
        </p>
      </div>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<DestinationDetail />} />
                <Route path='/about' element={ <About /> } />
              </Routes>
    </div> 
             
            </main>
          </div>
        </div>
      </Router>
    </DestinationsProvider>
  );
}

export default App;
