
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'wouter';
import { 
  ShieldCheck, 
  Lock,
  Eye,
  AlertTriangle,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  FileText,
  Network
} from 'lucide-react';

const Cybersecurity = () => {
  const services = [
    {
      icon: Eye,
      title: 'Threat Detection & Monitoring',
      description: '24/7 real-time monitoring and advanced threat detection to identify potential security risks.'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'End-to-end encryption and secure data handling to protect sensitive information.'
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits to identify and address potential vulnerabilities.'
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Secure access control and user identity verification systems.'
    },
    {
      icon: FileText,
      title: 'Compliance Management',
      description: 'Ensure adherence to industry standards like GDPR, HIPAA, and SOX.'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Firewall configuration, intrusion prevention, and network monitoring.'
    }
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    'Reduced security incidents by 85%',
    'Compliance with all major standards',
    'Rapid incident response (< 15 minutes)',
    'Employee security training included',
    'Regular security updates and patches'
  ];

  const standards = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', description: 'Health Insurance Portability' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with comprehensive, enterprise-grade cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Complete Security Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From threat detection to compliance management, we provide comprehensive cybersecurity solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-red-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              <Badge className="mb-4 bg-red-100 text-red-700">Security Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why Choose Our Security Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Advanced threat protection with proven results and industry-leading expertise.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white">
                <ShieldCheck className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Security Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Threats Blocked</span>
                    <span className="font-bold">10M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Detection Accuracy</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <span className="font-bold">&lt; 15min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Compliance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry Standards & Regulations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your business meets all regulatory requirements and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <div key={standard.name} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for a security breach. Let's implement comprehensive protection for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
