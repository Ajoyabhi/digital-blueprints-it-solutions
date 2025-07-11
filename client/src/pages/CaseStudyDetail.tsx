
import React from 'react';
import { useParams } from 'wouter';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, Target, CheckCircle, TrendingUp } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudiesData = {
    'healthcare-cloud-migration': {
      title: 'Healthcare Cloud Migration',
      industry: 'Healthcare',
      client: 'Regional Medical Center',
      duration: '6 months',
      teamSize: '8 specialists',
      description: 'Complete digital transformation of a regional medical center\'s patient management system through strategic cloud migration.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The regional medical center was struggling with an outdated legacy patient management system that caused significant delays in patient care. The system frequently experienced downtime, had limited scalability, and posed compliance risks with HIPAA regulations. Staff productivity was severely impacted due to slow data access and unreliable system performance.',
      solution: 'We implemented a comprehensive cloud migration strategy using AWS infrastructure with enhanced security protocols. The solution included:\n\n• Migration to AWS cloud with auto-scaling capabilities\n• Implementation of HIPAA-compliant security measures\n• Real-time data backup and disaster recovery\n• Staff training and change management\n• 24/7 monitoring and support system',
      results: 'The transformation delivered exceptional results that exceeded all expectations:\n\n• 60% improvement in data access speed\n• 99.9% system uptime achieved\n• Full HIPAA compliance maintained\n• 40% reduction in IT maintenance costs\n• Enhanced patient satisfaction scores',
      metrics: [
        { label: 'Data Access Speed', value: '60% faster', icon: TrendingUp },
        { label: 'System Uptime', value: '99.9%', icon: CheckCircle },
        { label: 'Cost Reduction', value: '40%', icon: Target },
        { label: 'Implementation Time', value: '6 months', icon: Calendar }
      ],
      technologies: ['AWS EC2', 'AWS RDS', 'Lambda Functions', 'CloudWatch', 'IAM Security'],
      testimonial: {
        quote: "The cloud migration transformed our operations completely. Patient care has improved dramatically with faster access to critical medical records.",
        author: "Dr. Sarah Mitchell",
        position: "Chief Medical Officer"
      }
    },
    'ecommerce-ai-integration': {
      title: 'E-commerce AI Integration',
      industry: 'E-commerce',
      client: 'Online Fashion Retailer',
      duration: '4 months',
      teamSize: '6 specialists',
      description: 'Revolutionary AI-powered recommendation engine and intelligent chatbot implementation for enhanced customer experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The e-commerce platform suffered from low conversion rates and high customer service costs. Customers struggled to find relevant products, leading to cart abandonment. The customer support team was overwhelmed with repetitive queries, impacting response times and customer satisfaction.',
      solution: 'We developed and integrated advanced AI solutions:\n\n• Machine learning recommendation engine\n• Natural language processing chatbot\n• Personalized product suggestions\n• Automated customer support system\n• Real-time analytics dashboard',
      results: 'The AI integration delivered remarkable business improvements:\n\n• 35% increase in sales conversion\n• 50% reduction in support queries\n• 24/7 automated customer assistance\n• 25% improvement in customer satisfaction\n• 30% increase in average order value',
      metrics: [
        { label: 'Sales Increase', value: '35%', icon: TrendingUp },
        { label: 'Query Reduction', value: '50%', icon: Target },
        { label: 'Availability', value: '24/7', icon: CheckCircle },
        { label: 'Project Duration', value: '4 months', icon: Calendar }
      ],
      technologies: ['TensorFlow', 'Python', 'React', 'Node.js', 'MongoDB'],
      testimonial: {
        quote: "The AI recommendations have transformed our customer experience. Sales have increased significantly while support costs decreased.",
        author: "Michael Chen",
        position: "Head of E-commerce"
      }
    },
    'banking-security-overhaul': {
      title: 'Banking Security Overhaul',
      industry: 'Financial',
      client: 'Community Bank',
      duration: '8 months',
      teamSize: '10 specialists',
      description: 'Comprehensive cybersecurity infrastructure enhancement implementing zero-trust architecture for maximum protection.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The regional bank faced increasing cyber threats and needed to comply with strict financial regulations. Their existing security infrastructure was outdated and vulnerable to sophisticated attacks. Regulatory compliance requirements demanded immediate security enhancements.',
      solution: 'We implemented a comprehensive zero-trust security framework:\n\n• Zero-trust network architecture\n• Multi-factor authentication system\n• Advanced threat detection and response\n• Compliance monitoring and reporting\n• Employee security training program',
      results: 'The security overhaul achieved outstanding protection results:\n\n• 99.9% threat prevention rate\n• Zero security breaches recorded\n• Full regulatory compliance achieved\n• 24/7 automated monitoring\n• 60% faster threat response time',
      metrics: [
        { label: 'Threat Prevention', value: '99.9%', icon: CheckCircle },
        { label: 'Security Breaches', value: '0', icon: Target },
        { label: 'Monitoring', value: '24/7', icon: TrendingUp },
        { label: 'Implementation', value: '8 months', icon: Calendar }
      ],
      technologies: ['Firewall Systems', 'SIEM Tools', 'Multi-factor Auth', 'Encryption', 'Monitoring Tools'],
      testimonial: {
        quote: "Our security posture has never been stronger. We now have complete confidence in our cybersecurity infrastructure.",
        author: "Jennifer Walsh",
        position: "Chief Security Officer"
      }
    },
    'manufacturing-iot-platform': {
      title: 'Manufacturing IoT Platform',
      industry: 'Manufacturing',
      client: 'Industrial Manufacturing Corp',
      duration: '5 months',
      teamSize: '7 specialists',
      description: 'Comprehensive IoT-enabled monitoring system implementation for production lines with predictive maintenance capabilities.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The manufacturing facility experienced frequent unexpected equipment failures causing significant production downtime and revenue losses. Manual monitoring was inefficient, and maintenance was purely reactive, leading to costly emergency repairs and extended outages.',
      solution: 'We deployed a comprehensive IoT monitoring platform with predictive analytics:\n\n• IoT sensors for real-time equipment monitoring\n• Machine learning algorithms for predictive maintenance\n• Automated alert systems for proactive interventions\n• Centralized dashboard for operations management\n• Integration with existing manufacturing systems',
      results: 'The IoT platform transformation delivered substantial operational improvements:\n\n• 40% reduction in equipment downtime\n• 25% increase in overall equipment effectiveness\n• 30% decrease in maintenance costs\n• Real-time visibility into production metrics\n• Improved worker safety through predictive alerts',
      metrics: [
        { label: 'Downtime Reduction', value: '40%', icon: TrendingUp },
        { label: 'Efficiency Gain', value: '25%', icon: Target },
        { label: 'Cost Savings', value: '30%', icon: CheckCircle },
        { label: 'Implementation', value: '5 months', icon: Calendar }
      ],
      technologies: ['IoT Sensors', 'Python', 'Machine Learning', 'React Dashboard', 'PostgreSQL'],
      testimonial: {
        quote: "The IoT platform has revolutionized our operations. We can now predict and prevent failures before they impact production.",
        author: "Robert Johnson",
        position: "Operations Director"
      }
    },
    'education-platform-modernization': {
      title: 'Education Platform Modernization',
      industry: 'Education',
      client: 'State University System',
      duration: '7 months',
      teamSize: '12 specialists',
      description: 'Complete modernization of learning management system to support massive scale with enhanced performance and accessibility.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The university\'s legacy learning management system could not handle the growing student population of 50,000+ users. The system experienced frequent crashes, slow loading times, and poor mobile compatibility, significantly impacting the learning experience.',
      solution: 'We built a modern, scalable learning management platform:\n\n• Cloud-native architecture for unlimited scalability\n• Mobile-first responsive design\n• Advanced caching and performance optimization\n• Accessibility compliance (WCAG 2.1)\n• Integration with existing university systems',
      results: 'The platform modernization achieved exceptional performance improvements:\n\n• 70% faster page loading times\n• 50,000+ concurrent users supported\n• 99.5% system uptime achieved\n• Mobile-optimized experience\n• Full accessibility compliance',
      metrics: [
        { label: 'Loading Speed', value: '70% faster', icon: TrendingUp },
        { label: 'User Capacity', value: '50K+', icon: Target },
        { label: 'System Uptime', value: '99.5%', icon: CheckCircle },
        { label: 'Project Duration', value: '7 months', icon: Calendar }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
      testimonial: {
        quote: "The new platform has transformed our online education capabilities. Students and faculty love the improved performance and usability.",
        author: "Dr. Patricia Williams",
        position: "Dean of Digital Learning"
      }
    },
    'fintech-api-development': {
      title: 'Fintech API Development',
      industry: 'Financial',
      client: 'NextGen Payments',
      duration: '6 months',
      teamSize: '9 specialists',
      description: 'Secure, scalable payment processing API development for fintech startup handling millions of transactions with enterprise-grade reliability.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=400',
      challenge: 'The fintech startup needed a robust payment processing infrastructure to handle rapid growth and millions of transactions. They required PCI compliance, real-time processing, and seamless integration capabilities while maintaining the highest security standards.',
      solution: 'We developed a comprehensive microservices-based payment API platform:\n\n• Microservices architecture for scalability\n• Advanced security with end-to-end encryption\n• Real-time transaction processing\n• PCI DSS compliance implementation\n• Comprehensive API documentation and SDKs\n• Multi-currency and multi-payment method support',
      results: 'The payment API platform delivered exceptional business outcomes:\n\n• 99.99% system uptime achieved\n• Millions of transactions processed daily\n• Sub-second transaction processing times\n• Full PCI DSS compliance\n• 40% reduction in transaction costs\n• Seamless third-party integrations',
      metrics: [
        { label: 'System Uptime', value: '99.99%', icon: CheckCircle },
        { label: 'Daily Transactions', value: 'Millions', icon: TrendingUp },
        { label: 'Processing Time', value: '<1 second', icon: Target },
        { label: 'Development Time', value: '6 months', icon: Calendar }
      ],
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Stripe API'],
      testimonial: {
        quote: "The payment API has been the foundation of our success. It handles our massive transaction volume flawlessly with perfect reliability.",
        author: "David Kim",
        position: "CTO & Co-founder"
      }
    }
  };

  const caseStudy = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                {caseStudy.industry}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {caseStudy.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-gray-400">Client</div>
                  <div className="font-semibold">{caseStudy.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="font-semibold">{caseStudy.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Team Size</div>
                  <div className="font-semibold">{caseStudy.teamSize}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Industry</div>
                  <div className="font-semibold">{caseStudy.industry}</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <metric.icon className="w-8 h-8 text-electric-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-navy-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Challenge</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {caseStudy.challenge}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Solution</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {caseStudy.solution}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Results</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {caseStudy.results}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            "{caseStudy.testimonial.quote}"
          </blockquote>
          <div className="text-lg">
            <div className="font-semibold">{caseStudy.testimonial.author}</div>
            <div className="opacity-90">{caseStudy.testimonial.position}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-electric-600 hover:bg-electric-700 text-white px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
