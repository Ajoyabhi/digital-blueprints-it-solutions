
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Server,
  Monitor,
  Shield,
  HardDrive,
  ArrowRight,
  CheckCircle,
  Network,
  Zap,
  Settings
} from 'lucide-react';

const ItInfrastructure = () => {
  const services = [
    {
      icon: Monitor,
      title: '24/7 Monitoring',
      description: 'Round-the-clock monitoring of your IT infrastructure with proactive issue resolution.'
    },
    {
      icon: Network,
      title: 'Network Management',
      description: 'Complete network setup, configuration, and management for optimal performance.'
    },
    {
      icon: HardDrive,
      title: 'Backup & Recovery',
      description: 'Comprehensive data backup solutions with fast disaster recovery capabilities.'
    },
    {
      icon: Server,
      title: 'Server Administration',
      description: 'Expert server management, maintenance, and optimization services.'
    },
    {
      icon: Settings,
      title: 'System Maintenance',
      description: 'Regular maintenance, updates, and performance optimization of IT systems.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization for maximum efficiency.'
    }
  ];

  const benefits = [
    '99.9% uptime guarantee',
    'Reduced IT costs by 30%',
    'Proactive issue prevention',
    'Scalable infrastructure solutions',
    'Expert technical support',
    'Regular security updates'
  ];

  const features = [
    {
      title: 'Proactive Monitoring',
      description: 'Advanced monitoring tools detect and resolve issues before they impact your business.',
      icon: Monitor
    },
    {
      title: 'Rapid Response',
      description: 'Our expert team responds to critical issues within 15 minutes.',
      icon: Zap
    },
    {
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs and requirements.',
      icon: Server
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your IT infrastructure.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <Clock className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              IT Infrastructure Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Complete IT infrastructure management with 24/7 monitoring, maintenance, and support services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Infrastructure Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Comprehensive IT Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From monitoring to maintenance, we provide complete IT infrastructure management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Key Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why Our Infrastructure Management Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and expert team to ensure your IT infrastructure runs smoothly 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Infrastructure Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Maximize Your IT Investment
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Professional IT infrastructure management that reduces costs and improves performance.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8">
                <Server className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>System Uptime</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-bold">&lt; 15min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Savings</span>
                    <span className="font-bold">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Support Levels</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Choose Your Support Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible support options to match your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                price: 'Starting at $500/month',
                features: ['Business hours support', 'Remote monitoring', 'Monthly reports', 'Basic maintenance']
              },
              {
                name: 'Professional',
                price: 'Starting at $1,000/month',
                features: ['24/7 support', 'Proactive monitoring', 'Weekly reports', 'Priority response', 'Backup management']
              },
              {
                name: 'Enterprise',
                price: 'Custom pricing',
                features: ['Dedicated support team', 'Real-time monitoring', 'Daily reports', 'Immediate response', 'Complete management']
              }
            ].map((plan, index) => (
              <Card key={plan.name} className={`animate-scale-in ${index === 1 ? 'ring-2 ring-blue-500' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                  <p className="text-blue-600 font-semibold mb-6">{plan.price}</p>
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimize Your IT Infrastructure
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts manage your IT infrastructure so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItInfrastructure;
