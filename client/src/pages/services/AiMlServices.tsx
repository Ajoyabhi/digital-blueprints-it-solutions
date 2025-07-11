
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain,
  BarChart3,
  Zap,
  Eye,
  ArrowRight,
  CheckCircle,
  Cpu,
  MessageSquare,
  Camera
} from 'lucide-react';

const AiMlServices = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics, classification, and pattern recognition.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to forecast trends and make data-driven business decisions.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and conversational AI solutions.'
    },
    {
      icon: Camera,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual quality inspection systems.'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation to streamline operations and reduce manual tasks.'
    },
    {
      icon: Cpu,
      title: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition and decision-making.'
    }
  ];

  const useCases = [
    {
      title: 'Customer Behavior Prediction',
      description: 'Analyze customer data to predict purchasing patterns and optimize marketing strategies.',
      impact: '35% increase in conversion rates'
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time fraud detection systems using advanced machine learning algorithms.',
      impact: '90% reduction in fraudulent transactions'
    },
    {
      title: 'Quality Control Automation',
      description: 'Computer vision systems for automated quality inspection in manufacturing.',
      impact: '50% reduction in defects'
    },
    {
      title: 'Chatbot & Virtual Assistants',
      description: 'Intelligent conversational AI for customer support and engagement.',
      impact: '70% reduction in support tickets'
    }
  ];

  const benefits = [
    'Increased operational efficiency by 40%',
    'Reduced manual processing time by 60%',
    'Improved decision-making accuracy',
    'Real-time insights and analytics',
    'Scalable AI solutions',
    'Custom model development'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
              <Code className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI/ML Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent automation and machine learning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">AI Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Intelligent Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-8 h-8 text-purple-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Use Cases</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Real-World AI Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI/ML solutions drive measurable results across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <span className="text-purple-700 font-semibold">Impact: {useCase.impact}</span>
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
              <Badge className="mb-4 bg-white/20 text-white border-white/30">AI Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our AI/ML Solutions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Unlock the full potential of your data with our advanced AI and machine learning capabilities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8">
                <Brain className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Accuracy Improvement</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Processing Speed</span>
                    <span className="font-bold">10x Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Reduction</span>
                    <span className="font-bold">40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore how AI and machine learning can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                Start AI Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              AI Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiMlServices;
