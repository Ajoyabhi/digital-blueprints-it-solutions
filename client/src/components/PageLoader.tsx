
import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative flex flex-col items-center space-y-8 p-8">
        {/* Main loader with enhanced styling */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-full p-6 border border-border/50 shadow-2xl">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        </div>

        {/* Loading text with typing animation */}
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-foreground animate-fade-in">
            Loading Experience
          </h3>
          <div className="flex items-center space-x-1 justify-center">
            <span className="text-sm text-muted-foreground">Please wait</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>

        {/* Subtle animation elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default PageLoader;
