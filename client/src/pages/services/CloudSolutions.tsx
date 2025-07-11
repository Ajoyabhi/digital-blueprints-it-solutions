
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'wouter';
import { 
  Cloud, 
  Server,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Settings,
  BarChart3
} from 'lucide-react';

const CloudSolutions = () => {
  const features = [
    {
      icon: Server,
      title: 'Infrastructure Migration',
      description: 'Seamless migration of your existing infrastructure to cloud platforms with minimal downtime.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and scalable data storage solutions with automated backup and recovery.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud resources for maximum performance and cost efficiency.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Deploy across multiple cloud providers for enhanced reliability and flexibility.'
    },
    {
      icon: Settings,
      title: 'Automated Management',
      description: 'Infrastructure as Code and automated deployment pipelines for efficient operations.'
    }
  ];

  const benefits = [
    'Reduced operational costs by up to 40%',
    'Improved scalability and flexibility',
    '99.99% uptime guarantee',
    '24/7 monitoring and support',
    'Automated backup and disaster recovery',
    'Enhanced security and compliance'
  ];

  const platforms = [
    { name: 'Amazon Web Services (AWS)', logo: '🟠' },
    { name: 'Microsoft Azure', logo: '🔵' },
    { name: 'Google Cloud Platform', logo: '🟡' },
    { name: 'IBM Cloud', logo: '🔷' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <Cloud className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-100 mb-6 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-electric-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-electric-100 text-electric-700">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Key Benefits of Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the transformative power of cloud technology with our proven solutions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-electric-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-500 to-neon-500 rounded-2xl p-8 text-white">
                <BarChart3 className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Cost Reduction</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Performance Improvement</span>
                    <span className="font-bold">3x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Deployment Speed</span>
                    <span className="font-bold">80% Faster</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Cloud Platforms</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud platforms to provide you with the best solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={platform.name} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-6xl mb-4">{platform.logo}</div>
                <h3 className="text-lg font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your cloud migration strategy and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3">
                Start Your Migration
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

export default CloudSolutions;
