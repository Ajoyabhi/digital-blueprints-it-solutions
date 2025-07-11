
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@techflow.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: '123 Innovation Drive, Suite 400'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8am-6pm EST',
      description: '24/7 emergency support available'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Suite 400',
      phone: '+1 (555) 123-4567',
      email: 'sf@techflow.com'
    },
    {
      city: 'London',
      address: '456 Tech Street, Floor 12',
      phone: '+44 20 1234 5678',
      email: 'london@techflow.com'
    },
    {
      city: 'Singapore',
      address: '789 Business Boulevard, Level 25',
      phone: '+65 1234 5678',
      email: 'singapore@techflow.com'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Transform Your Business Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to take your technology to the next level? Our experts are here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours with a customized solution for your needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Inc."
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="security">Cybersecurity</SelectItem>
                        <SelectItem value="ai">AI/ML Services</SelectItem>
                        <SelectItem value="development">Software Development</SelectItem>
                        <SelectItem value="infrastructure">IT Infrastructure</SelectItem>
                        <SelectItem value="consulting">IT Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, challenges, and goals..."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-navy-900 hover:bg-navy-800">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-electric-500 to-neon-500 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{info.title}</h3>
                        <p className="text-gray-800 font-medium">{info.content}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-navy-100 to-electric-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-navy-600 mx-auto mb-4" />
                      <p className="text-navy-800 font-medium">Interactive Map</p>
                      <p className="text-gray-600 text-sm">Find our offices worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-navy-100 text-navy-700">
              Global Presence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Our Offices Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across three continents, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={office.city} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-electric-500" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-electric-500" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-electric-500" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-electric-100 text-electric-700">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you start a new project?',
                answer: 'We typically can begin new projects within 1-2 weeks, depending on scope and current capacity. Emergency projects can often be accommodated with same-day or next-day starts.'
              },
              {
                question: 'Do you work with small businesses or only enterprises?',
                answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to fit your specific needs and budget.'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity, but most implementations range from 4-16 weeks. We provide detailed timelines and milestones during our initial consultation.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, and technical support to ensure your systems run smoothly long-term.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation and discover how we can transform your business.
          </p>
          <Button size="lg" className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
