
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConsultationDialog from '@/components/dialogs/ConsultationDialog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'AI/ML Services', href: '/services/ai-ml-services' },
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
  ];

  const isActive = (path: string) => location === path;
  const isServicesActive = () => location.startsWith('/services');

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Code className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-navy-900' : 'text-white'
                } group-hover:text-electric-500`} />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              } group-hover:text-electric-500`}>
                TechFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-electric-500 ${
                    isActive(item.href)
                      ? isScrolled 
                        ? 'text-electric-600' 
                        : 'text-electric-400'
                      : isScrolled 
                        ? 'text-navy-700 hover:text-electric-600' 
                        : 'text-gray-200 hover:text-white'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-electric-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive(item.href) ? 'after:scale-x-100' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-electric-500 flex items-center gap-1 ${
                      isServicesActive()
                        ? isScrolled 
                          ? 'text-electric-600' 
                          : 'text-electric-400'
                        : isScrolled 
                          ? 'text-navy-700 hover:text-electric-600' 
                          : 'text-gray-200 hover:text-white'
                    } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-electric-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                      isServicesActive() ? 'after:scale-x-100' : ''
                    }`}
                  >
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-56 bg-white border border-gray-200 shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/services" 
                      className="w-full px-3 py-2 text-sm font-medium text-navy-700 hover:text-electric-600 hover:bg-gray-50 cursor-pointer"
                    >
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link 
                        to={service.href}
                        className="w-full px-3 py-2 text-sm text-navy-700 hover:text-electric-600 hover:bg-gray-50 cursor-pointer"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button 
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-navy-900 hover:bg-navy-800 text-white' 
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                }`}
                onClick={() => setIsDialogOpen(true)}
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/20 mt-4 rounded-lg shadow-lg">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-electric-600 bg-electric-50'
                        : 'text-navy-700 hover:text-electric-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Section */}
                <div className="pt-2">
                  <div className="px-3 py-2 text-base font-medium text-navy-900 border-b border-gray-200">
                    Services
                  </div>
                  <Link
                    to="/services"
                    className="block px-6 py-2 text-sm text-navy-700 hover:text-electric-600 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-2 text-sm text-navy-700 hover:text-electric-600 hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Button 
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                    onClick={() => {
                      setIsDialogOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <ConsultationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default Header;
