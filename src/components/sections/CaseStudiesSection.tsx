
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'Healthcare Cloud Migration',
      industry: 'Healthcare',
      description: 'Migrated legacy systems to cloud, improving patient data access by 60%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '60% faster access',
      slug: 'healthcare-cloud-migration'
    },
    {
      title: 'E-commerce AI Integration',
      industry: 'E-commerce',
      description: 'Implemented AI-powered recommendation engine, boosting sales by 35%',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '35% sales increase',
      slug: 'ecommerce-ai-integration'
    },
    {
      title: 'Banking Security Overhaul',
      industry: 'Financial',
      description: 'Enhanced cybersecurity infrastructure, preventing 99.9% of threats',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '99.9% threat prevention',
      slug: 'banking-security-overhaul'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-neon-100 text-neon-700">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={study.title} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-navy-700">{study.industry}</Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-electric-500 text-white">{study.metrics}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{study.description}</p>
                <Link to={`/case-studies/${study.slug}`} className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button size="lg" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
