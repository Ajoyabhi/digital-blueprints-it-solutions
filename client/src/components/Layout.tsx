
import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Header from './Header';
import Footer from './Footer';
import PageLoader from './PageLoader';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsTransitioning(true);
    
    // Simulate realistic loading time with smooth transition
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
    };
  }, [location]);

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
      <Chatbot />
    </div>
  );
};

export default Layout;
