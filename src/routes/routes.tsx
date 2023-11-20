// routes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebarWithNavbar';
import Login from '../components/login';

import App from '../App';

const routesData = [
  { path: '/', element: <App /> },
  { path: '/dashboard', element: <Sidebar /> },
  { path: '/login', element: <Login /> },
  
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesData.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
