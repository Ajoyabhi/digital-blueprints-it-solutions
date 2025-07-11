
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Code, 
  ChevronDown, 
  Cloud, 
  Shield, 
  Brain, 
  Laptop, 
  Settings,
  CreditCard,
  Smartphone,
  Zap,
  Building,
  Wallet,
  DollarSign,
  Receipt,
  Users,
  Globe
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'AI/ML Services', href: '/services/ai-ml-services', icon: Brain },
    { name: 'Software Development', href: '/services/software-development', icon: Code },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Settings },
  ];

  const fintechServices = [
    { name: 'Business Software & APIs', href: '/fintech/business-software', icon: Building },
    { name: 'Domestic Money Transfer (DMT)', href: '/fintech/dmt', icon: CreditCard },
    { name: 'Utility Payment Collection', href: '/fintech/utility-payments', icon: Receipt },
    { name: 'Pay-in & Pay-out Gateway', href: '/fintech/payment-gateway', icon: Wallet },
    { name: 'BBPS API Integration', href: '/fintech/bbps', icon: DollarSign },
    { name: 'Mobile & DTH Recharge', href: '/fintech/recharge', icon: Smartphone },
    { name: 'AEPS Integration', href: '/fintech/aeps', icon: Zap },
    { name: 'White-label B2B Software', href: '/fintech/white-label', icon: Users },
  ];

  const isActive = (path: string) => location === path;
  const isServicesActive = () => location.startsWith('/services');
  const isFintechActive = () => location.startsWith('/fintech');

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
                  className="w-64 bg-white border border-gray-200 shadow-lg"
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/services" 
                      className="w-full px-3 py-2 text-sm font-medium text-navy-700 hover:text-electric-600 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link 
                          to={service.href} 
                          className="w-full px-3 py-2 text-sm text-gray-700 hover:text-electric-600 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4" />
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Fintech Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-electric-500 flex items-center gap-1 ${
                      isFintechActive()
                        ? isScrolled 
                          ? 'text-electric-600' 
                          : 'text-electric-400'
                        : isScrolled 
                          ? 'text-navy-700 hover:text-electric-600' 
                          : 'text-gray-200 hover:text-white'
                    } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-electric-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                      isFintechActive() ? 'after:scale-x-100' : ''
                    }`}
                  >
                    Fintech Solutions
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-72 bg-white border border-gray-200 shadow-lg"
                >
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Payment & Financial APIs
                  </div>
                  {fintechServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link 
                          to={service.href} 
                          className="w-full px-3 py-2 text-sm text-gray-700 hover:text-electric-600 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4" />
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-navy-700 hover:text-electric-600' 
                    : 'text-white hover:text-electric-400'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Free Consultation Button */}
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
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-electric-600'
                      : 'text-gray-700 hover:text-electric-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Services
                </div>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-electric-600 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Fintech Solutions
                </div>
                {fintechServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-electric-600 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-electric-500 hover:bg-electric-600 text-white"
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
      </header>

      <ConsultationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default Header;
