import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors duration-200">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const formattedName = name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            return (
              <React.Fragment key={name}>
                <span>/</span>
                {isLast ? (
                  <span className="text-white">{formattedName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {formattedName}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb; 