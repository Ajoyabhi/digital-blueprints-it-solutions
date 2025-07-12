import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Globe,
  Clock,
  Users,
  Target
} from 'lucide-react';

const DataAnalytics = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Warehousing',
      description: 'Centralized data storage solutions with ETL processes and data integration from multiple sources.',
      features: ['Data Integration', 'ETL Processes', 'Data Cleansing', 'Scalable Architecture']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reporting tools that transform complex data into actionable insights.',
      features: ['Interactive Dashboards', 'Automated Reporting', 'KPI Monitoring', 'Self-Service Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Live data processing and streaming analytics for immediate insights and rapid decision making.',
      features: ['Stream Processing', 'Real-time Dashboards', 'Alert Systems', 'Live Data Feeds']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Professional charts, graphs, and visual representations that make complex data easily understandable.',
      features: ['Custom Charts', 'Interactive Graphics', 'Mobile Responsive', 'Export Capabilities']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that forecast trends and predict future business outcomes.',
      features: ['Forecasting Models', 'Trend Analysis', 'Risk Assessment', 'Behavior Prediction']
    },
    {
      icon: Settings,
      title: 'Data Engineering',
      description: 'Robust data pipelines and infrastructure for efficient data processing and management.',
      features: ['Data Pipelines', 'Quality Assurance', 'Performance Optimization', 'Automated Processing']
    }
  ];

  const features = [
    {
      title: 'Advanced Analytics Platform',
      description: 'Comprehensive analytics suite with machine learning capabilities'
    },
    {
      title: 'Real-time Data Processing',
      description: 'Process millions of data points in real-time with low latency'
    },
    {
      title: 'Custom Dashboard Creation',
      description: 'Build personalized dashboards tailored to your business needs'
    },
    {
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security with full compliance support'
    },
    {
      title: 'Cloud-Native Architecture',
      description: 'Scalable cloud infrastructure that grows with your business'
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with existing systems and third-party tools'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions based on accurate, real-time data insights and analytics.'
    },
    {
      icon: TrendingUp,
      title: 'Improved Performance',
      description: 'Identify bottlenecks and optimization opportunities to enhance operational efficiency.'
    },
    {
      icon: Users,
      title: 'Better Customer Understanding',
      description: 'Gain deep insights into customer behavior and preferences for targeted strategies.'
    },
    {
      icon: Zap,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with advanced analytics and predictive capabilities.'
    }
  ];

  const useCases = [
    {
      title: 'Sales & Marketing Analytics',
      description: 'Track campaign performance, customer acquisition, and revenue metrics',
      metrics: ['Lead Conversion', 'Customer Lifetime Value', 'ROI Tracking']
    },
    {
      title: 'Operations Analytics',
      description: 'Monitor operational efficiency, resource utilization, and process optimization',
      metrics: ['Performance KPIs', 'Resource Allocation', 'Process Efficiency']
    },
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial reporting, budgeting, and forecasting solutions',
      metrics: ['Revenue Analysis', 'Cost Optimization', 'Budget Variance']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'Optimize inventory, logistics, and supplier performance management',
      metrics: ['Inventory Turnover', 'Delivery Performance', 'Supplier Metrics']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Data Analytics
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Data Into Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Unlock the power of your data with our comprehensive analytics solutions. 
                From data warehousing to predictive analytics, we help you make informed decisions that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-3 text-lg">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-orange-200 text-sm">Data Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">10x</div>
                    <div className="text-orange-200 text-sm">Faster Insights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50%</div>
                    <div className="text-orange-200 text-sm">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-orange-200 text-sm">Real-time Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From data collection to advanced analytics, we provide end-to-end solutions 
              that transform your raw data into actionable business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our analytics platform comes with everything you need to collect, process, 
              analyze, and visualize your data effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of data-driven decision making with our 
              comprehensive analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our analytics solutions are tailored to meet the specific needs of various industries and business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="outline" className="text-orange-600 border-orange-200">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our data analytics solutions can help your business make better decisions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Schedule Consultation
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
              Download Case Study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;