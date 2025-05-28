
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
  Award,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      color: 'text-electric-500'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'text-neon-500'
    },
    {
      icon: Code,
      title: 'AI/ML Services',
      description: 'Intelligent automation and machine learning solutions.',
      color: 'text-navy-500'
    },
    {
      icon: Users,
      title: 'Software Development',
      description: 'Custom software and applications tailored to your needs.',
      color: 'text-electric-600'
    },
    {
      icon: Clock,
      title: 'IT Infrastructure',
      description: '24/7 managed services and infrastructure optimization.',
      color: 'text-neon-600'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Enterprise-Grade Expertise',
      description: 'Over 10 years of experience serving Fortune 500 companies'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your peace of mind'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: '99.9% uptime guarantee with 500+ successful projects'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateCorp',
      content: 'TechFlow transformed our entire IT infrastructure. The cloud migration was seamless and our productivity increased by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataDrive Solutions',
      content: 'Their AI/ML implementation revolutionized our data analytics. We now make data-driven decisions faster than ever.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Operations, SecureFinance',
      content: 'The cybersecurity solutions provided by TechFlow gave us complete confidence in our digital security posture.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Cloud Migration',
      industry: 'Healthcare',
      description: 'Migrated legacy systems to cloud, improving patient data access by 60%',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '60% faster access'
    },
    {
      title: 'E-commerce AI Integration',
      industry: 'E-commerce',
      description: 'Implemented AI-powered recommendation engine, boosting sales by 35%',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '35% sales increase'
    },
    {
      title: 'Banking Security Overhaul',
      industry: 'Financial',
      description: 'Enhanced cybersecurity infrastructure, preventing 99.9% of threats',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250',
      metrics: '99.9% threat prevention'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-tech-background-with-moving-dots-25733-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/70 z-10"></div>
        <div className="absolute inset-0 tech-pattern opacity-10 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-transparent to-navy-900/50 z-20"></div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🚀 Transforming Businesses Since 2014
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses with
              <span className="block mt-2 bg-gradient-to-r from-electric-400 via-neon-400 to-electric-300 bg-clip-text text-transparent">
                Future-Ready IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your digital infrastructure with cutting-edge technology, expert guidance, and 24/7 support that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-electric-500/20 rounded-full animate-float z-30"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-neon-500/20 rounded-full animate-float z-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float z-30" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud infrastructure to AI implementation, we provide end-to-end technology solutions that drive growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-electric-100 text-electric-700">Why TechFlow</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group animate-slide-in-right" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
                  <Link to="/case-studies" className="inline-flex items-center text-electric-600 font-medium hover:text-electric-700 transition-colors">
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

      {/* Client Testimonials */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Client Success</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about partnering with TechFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-electric-400">{testimonial.name}</p>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Let's discuss how our IT solutions can accelerate your growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
