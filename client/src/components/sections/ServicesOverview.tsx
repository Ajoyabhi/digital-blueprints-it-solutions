
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'wouter';
import { 
  Cloud, 
  ShieldCheck, 
  Code, 
  Users, 
  Clock,
  ArrowRight
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      color: 'text-electric-500',
      link: '/services/cloud-solutions'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'text-neon-500',
      link: '/services/cybersecurity'
    },
    {
      icon: Code,
      title: 'AI/ML Services',
      description: 'Intelligent automation and machine learning solutions.',
      color: 'text-navy-500',
      link: '/services/ai-ml-services'
    },
    {
      icon: Users,
      title: 'Software Development',
      description: 'Custom software and applications tailored to your needs.',
      color: 'text-electric-600',
      link: '/services/software-development'
    },
    {
      icon: Clock,
      title: 'IT Infrastructure',
      description: '24/7 managed services and infrastructure optimization.',
      color: 'text-neon-600',
      link: '/services/it-infrastructure'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-navy-100 text-navy-700">Our Expertise</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud infrastructure to AI implementation, we provide end-to-end technology solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
