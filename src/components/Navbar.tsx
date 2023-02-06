import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';

type Path = {
  to: string;
  element: string;
};

const links: Path[] = [
  { to: '/', element: 'Home' },
  { to: '/store', element: 'Store' },
  { to: '/about', element: 'About' }
];
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        {links?.map((link: Path, i: number) => {
          return (
            <Link key={i} to={link.to}>
              {link.element}
            </Link>
          );
        })}
      </nav>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </React.Suspense>
    </>
  );
};
export default Navbar;
