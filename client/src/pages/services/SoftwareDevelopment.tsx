
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { 
  Users, 
  Monitor,
  Smartphone,
  Globe,
  Database,
  ArrowRight,
  CheckCircle,
  Code,
  Zap,
  Settings
} from 'lucide-react';

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive, scalable web applications built with modern frameworks and technologies.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful APIs and microservices architecture for seamless system integration.'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.'
    },
    {
      icon: Settings,
      title: 'Legacy Modernization',
      description: 'Modernize legacy systems with new technologies while preserving business logic.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize application performance for better user experience and efficiency.'
    }
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'C#'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] }
  ];

  const benefits = [
    'Faster time-to-market by 50%',
    'Scalable architecture design',
    'Cross-platform compatibility',
    'Agile development methodology',
    'Continuous integration/deployment',
    '24/7 post-launch support'
  ];

  const process = [
    { step: '01', title: 'Requirements Analysis', description: 'Understanding your business needs and technical requirements' },
    { step: '02', title: 'Design & Planning', description: 'Creating user-centric designs and development roadmap' },
    { step: '03', title: 'Development', description: 'Agile development with regular iterations and feedback' },
    { step: '04', title: 'Testing & Deployment', description: 'Comprehensive testing and smooth deployment process' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neon-600 via-neon-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Software Development
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Custom software solutions built with cutting-edge technologies to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Development Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              End-to-End Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive software development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-100 mb-6 group-hover:bg-neon-500 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-neon-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neon-100 text-neon-700">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={tech.category} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-neon-500 rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-neon-100 text-neon-700">Development Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why Choose Our Development Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Professional software development with focus on quality, performance, and user experience.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-neon-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-neon-500 to-green-500 rounded-2xl p-8 text-white">
                <Code className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Project Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Projects Delivered</span>
                    <span className="font-bold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Client Satisfaction</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>On-Time Delivery</span>
                    <span className="font-bold">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Development Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven development process ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center animate-slide-in-right" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold text-neon-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-600 via-neon-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and create a custom software solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-neon-600 hover:bg-gray-100 px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
