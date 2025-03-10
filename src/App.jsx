import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import DestinationDetail from './pages/DestinationDetail';
import { DestinationsProvider } from './context/DestinationsContext';

function App() {
  return (
    <DestinationsProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 md:ml-64"> {/* Add margin to offset sidebar width */}
            <main className="p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<DestinationDetail />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </DestinationsProvider>
  );
}

export default App;
