
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Former Microsoft executive with 15+ years in enterprise technology solutions.',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'AI/ML expert and former Google engineer specializing in scalable architectures.',
      linkedin: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Operations leader with expertise in agile project management and client success.',
      linkedin: '#'
    },
    {
      name: 'David Park',
      role: 'Head of Security',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
      bio: 'Cybersecurity expert with background in financial services and compliance.',
      linkedin: '#'
    }
  ];

  const timeline = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to democratize enterprise technology' },
    { year: '2016', title: 'First Major Client', description: 'Successful cloud migration for Fortune 500 healthcare company' },
    { year: '2018', title: 'AI Division Launch', description: 'Expanded into artificial intelligence and machine learning services' },
    { year: '2020', title: 'Remote-First Pivot', description: 'Successfully transitioned to remote-first operations during pandemic' },
    { year: '2022', title: 'International Expansion', description: 'Opened offices in London and Singapore' },
    { year: '2024', title: 'Industry Recognition', description: 'Named "Best IT Services Company" by Tech Innovation Awards' }
  ];

  const stats = [
    { number: '10+', label: 'Years of Innovation', icon: Clock },
    { number: '500+', label: 'Clients Served', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Global Support', icon: Globe }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure ourselves by your outcomes.',
      icon: '🎯'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest reporting in every engagement.',
      icon: '💎'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver.',
      icon: '⭐'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                About TechFlow
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Businesses Through Technology
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Since 2014, we've been helping businesses harness the power of technology to drive innovation, improve efficiency, and achieve sustainable growth.
              </p>
              <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-white">
                Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-electric-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-electric-500 to-neon-500 mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-electric-100 text-electric-700">Our Mission</Badge>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Empowering Digital Transformation
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We exist to bridge the gap between business vision and technology reality. Our mission is to empower organizations of all sizes to leverage cutting-edge technology solutions that drive growth, efficiency, and innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-neon-100 text-neon-700">Our Vision</Badge>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Technology That Transforms
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We envision a world where every business, regardless of size or industry, has access to enterprise-grade technology solutions that were once available only to large corporations. We're democratizing digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Leadership Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, business, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{leader.name}</h3>
                  <p className="text-electric-600 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Company Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A decade of growth, innovation, and success stories.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-electric-500"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-electric-500 text-white">{item.year}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-500 rounded-full border-4 border-navy-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who trust TechFlow with their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
