import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      type: 'contact',
      icon: Phone,
      text: 'Call us now: +1 (555) 123-4567',
      color: 'text-white'
    },
    {
      type: 'email',
      icon: Mail,
      text: 'Email: hello@techflow.com',
      color: 'text-white'
    },
    {
      type: 'hours',
      icon: Clock,
      text: 'Working Hours: Mon-Fri 9AM-6PM EST',
      color: 'text-white'
    },
    {
      type: 'offer',
      icon: null,
      text: '🎉 Special Offer: Free consultation for new clients this month!',
      color: 'text-yellow-300'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  const currentAnnouncement = announcements[currentIndex];
  const Icon = currentAnnouncement.icon;

  return (
    <div className="bg-navy-900 text-white py-2 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center gap-2 animate-fade-in">
            {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
            <span className={`text-sm font-medium ${currentAnnouncement.color} whitespace-nowrap`}>
              {currentAnnouncement.text}
            </span>
          </div>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700">
        <div 
          className="h-full bg-electric-400 transition-all duration-4000 ease-linear"
          style={{ width: `${((currentIndex + 1) / announcements.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AnnouncementBar;