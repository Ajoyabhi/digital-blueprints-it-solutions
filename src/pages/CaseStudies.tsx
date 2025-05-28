
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter } from 'lucide-react';

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Healthcare', 'E-commerce', 'Financial', 'Manufacturing', 'Education'];

  const caseStudies = [
    {
      title: 'Healthcare Cloud Migration',
      industry: 'Healthcare',
      description: 'Migrated legacy patient management system to cloud infrastructure, improving data access speed by 60% while ensuring HIPAA compliance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['60% faster access', '99.9% uptime', 'HIPAA compliant'],
      tags: ['Cloud Migration', 'Healthcare', 'Compliance'],
      challenge: 'Legacy system causing delays in patient care',
      solution: 'AWS cloud migration with enhanced security',
      results: 'Improved patient care efficiency and data security'
    },
    {
      title: 'E-commerce AI Integration',
      industry: 'E-commerce',
      description: 'Implemented AI-powered recommendation engine and chatbot, resulting in 35% increase in sales and 50% reduction in customer service queries.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['35% sales increase', '50% fewer queries', '24/7 support'],
      tags: ['AI/ML', 'E-commerce', 'Automation'],
      challenge: 'Low conversion rates and high support costs',
      solution: 'AI recommendation engine and intelligent chatbot',
      results: 'Significant revenue growth and cost reduction'
    },
    {
      title: 'Banking Security Overhaul',
      industry: 'Financial',
      description: 'Enhanced cybersecurity infrastructure for regional bank, implementing zero-trust architecture and preventing 99.9% of security threats.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['99.9% threat prevention', 'Zero breaches', '24/7 monitoring'],
      tags: ['Cybersecurity', 'Banking', 'Zero Trust'],
      challenge: 'Increasing cyber threats and regulatory compliance',
      solution: 'Zero-trust security architecture implementation',
      results: 'Enhanced security posture and regulatory compliance'
    },
    {
      title: 'Manufacturing IoT Platform',
      industry: 'Manufacturing',
      description: 'Developed IoT-enabled monitoring system for production lines, reducing downtime by 40% and improving overall equipment effectiveness.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['40% less downtime', '25% efficiency gain', 'Real-time monitoring'],
      tags: ['IoT', 'Manufacturing', 'Analytics'],
      challenge: 'Unexpected equipment failures causing costly downtime',
      solution: 'Predictive maintenance IoT platform',
      results: 'Reduced downtime and increased productivity'
    },
    {
      title: 'Education Platform Modernization',
      industry: 'Education',
      description: 'Modernized learning management system for university, supporting 50,000+ students with improved performance and accessibility.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['50K+ users', '70% faster loading', 'Mobile optimized'],
      tags: ['Education', 'Web Development', 'Scalability'],
      challenge: 'Outdated system unable to handle growing user base',
      solution: 'Modern, scalable learning management platform',
      results: 'Improved user experience and system reliability'
    },
    {
      title: 'Fintech API Development',
      industry: 'Financial',
      description: 'Built secure payment processing API for fintech startup, handling millions of transactions with 99.99% reliability.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600&h=400',
      metrics: ['99.99% uptime', 'Millions of transactions', 'PCI compliant'],
      tags: ['API Development', 'Fintech', 'Security'],
      challenge: 'Need for secure, scalable payment infrastructure',
      solution: 'Microservices-based payment API with advanced security',
      results: 'Reliable payment processing enabling business growth'
    }
  ];

  const filteredStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve their digital transformation goals and drive measurable results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by Industry:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={selectedFilter === filter ? "bg-navy-900 hover:bg-navy-800" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <Card 
                key={study.title} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-navy-700">
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {study.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {study.metrics.map((metric) => (
                        <div key={metric} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-electric-500 rounded-full"></div>
                          <span className="text-sm font-medium text-navy-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-800">Challenge: </span>
                      <span className="text-gray-600">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Solution: </span>
                      <span className="text-gray-600">{study.solution}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Results: </span>
                      <span className="text-gray-600">{study.results}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 group-hover:bg-navy-900 transition-colors">
                    Read Full Story
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
