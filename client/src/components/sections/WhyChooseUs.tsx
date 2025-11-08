
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Award, Clock, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Enterprise-Grade Expertise',
      description: 'Over 10 years of experience serving Fortune 500 companies'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your peace of mind'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: '99.9% uptime guarantee with 500+ successful projects'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-electric-100 text-electric-700">Why PayzuTech</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group animate-slide-in-right" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
