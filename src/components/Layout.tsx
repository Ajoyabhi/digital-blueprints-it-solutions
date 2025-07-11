
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageLoader from './PageLoader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsTransitioning(true);
    
    // Simulate realistic loading time with smooth transition
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Slightly longer for better UX

    // const transitionTimer = setTimeout(() => {
    //   setIsTransitioning(false);
    // }, 1000);

    return () => {
      clearTimeout(loadingTimer);
      // clearTimeout(transitionTimer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <PageLoader />}
      <Header />
      <main 
        className={`flex-1 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
