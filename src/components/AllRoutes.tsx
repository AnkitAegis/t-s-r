import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

const Home = React.lazy(() => wait(1000).then(() => import('../pages/Home')));
const Store = React.lazy(() => wait(1000).then(() => import('../pages/Store')));
const About = React.lazy(() => wait(1000).then(() => import('../pages/About')));
//*this importing syntax only works when a component is default imported
const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
export default AllRoutes;

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
