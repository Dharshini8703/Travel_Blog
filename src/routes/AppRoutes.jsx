import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Destination from '../pages/Destination';

const allRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/places',
    element: <Destination />
  }
];



function AppRoutes() { 
  return (
    <BrowserRouter> 
      <Routes>
        {allRoutes.map((route, index) => ( 
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
