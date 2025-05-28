
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ShieldCheck, 
  Code, 
  Users, 
  Clock,
  ArrowRight,
  CheckCircle,
  Server,
  Database,
  Globe,
  Zap,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Complete cloud transformation services including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Multi-cloud Strategy'],
      color: 'from-electric-500 to-electric-600',
      badge: 'Infrastructure'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats with advanced monitoring and response.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      color: 'from-red-500 to-red-600',
      badge: 'Security'
    },
    {
      icon: Code,
      title: 'AI/ML Services',
      description: 'Intelligent automation and machine learning solutions that transform data into actionable insights and automated processes.',
      features: ['Predictive Analytics', 'Process Automation', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-purple-500 to-purple-600',
      badge: 'Innovation'
    },
    {
      icon: Users,
      title: 'Software Development',
      description: 'Custom software applications and platforms built with modern technologies to meet your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization'],
      color: 'from-neon-500 to-neon-600',
      badge: 'Development'
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Complete infrastructure management and optimization with 24/7 monitoring, maintenance, and support services.',
      features: ['24/7 Monitoring', 'Network Management', 'Backup & Recovery', 'Performance Optimization'],
      color: 'from-blue-500 to-blue-600',
      badge: 'Management'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your raw data into valuable business insights with advanced analytics and visualization solutions.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
      color: 'from-orange-500 to-orange-600',
      badge: 'Analytics'
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your systems for maximum efficiency and speed.'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic technology consulting and architecture design.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From cloud infrastructure to AI implementation, we provide cutting-edge technology solutions that drive innovation and growth for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden animate-scale-in" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-electric-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full group-hover:bg-navy-900 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">
              Additional Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core offerings, we provide specialized services to address unique technology challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={service.title} 
                className="text-center group animate-fade-in" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery and long-term partnership success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and technical requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive technology roadmap' },
              { step: '03', title: 'Implementation', description: 'Executing solutions with agile methodologies' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization services' }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-slide-in-right" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold text-electric-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your technology needs and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
