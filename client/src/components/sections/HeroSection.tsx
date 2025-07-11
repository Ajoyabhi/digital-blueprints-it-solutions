
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import ConsultationDialog from '@/components/dialogs/ConsultationDialog';

const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-tech-background-with-moving-dots-25733-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/70 z-10"></div>
        <div className="absolute inset-0 tech-pattern opacity-10 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50 z-20"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🚀 Transforming Businesses Since 2014
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses with
              <span className="block mt-2 bg-gradient-to-r from-electric-400 via-neon-400 to-electric-300 bg-clip-text text-transparent">
                Future-Ready IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your digital infrastructure with cutting-edge technology, expert guidance, and 24/7 support that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 text-lg"
                onClick={() => setIsDialogOpen(true)}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-electric-500/20 rounded-full animate-float z-30"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-neon-500/20 rounded-full animate-float z-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float z-30" style={{animationDelay: '2s'}}></div>
      </section>

      <ConsultationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default HeroSection;
