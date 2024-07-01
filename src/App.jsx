import React from 'react';
import './style/main.scss';
import './style/variables.scss';
import './components/header/header.scss';
import { RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import router from './Tools/router/router';

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </>
  )
}

export default App;