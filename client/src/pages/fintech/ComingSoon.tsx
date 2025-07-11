import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  Bell, 
  ArrowRight, 
  CheckCircle, 
  Mail,
  Calendar,
  Star,
  Users,
  Zap,
  Shield
} from 'lucide-react';

interface ComingSoonProps {
  serviceName: string;
  serviceDescription: string;
  expectedLaunch: string;
  features: string[];
}

const ComingSoon = ({ 
  serviceName, 
  serviceDescription, 
  expectedLaunch, 
  features 
}: ComingSoonProps) => {
  const benefits = [
    "Early access to new features",
    "Priority customer support",
    "Exclusive beta testing opportunities",
    "Special launch pricing",
    "Direct feedback channel with our team"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-400">
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {serviceName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {serviceDescription}
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-lg text-purple-300">Expected Launch: {expectedLaunch}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Coming
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're building something amazing. Here's what you can expect from our upcoming {serviceName.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{feature}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Signup */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Be the First to Know
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get notified when {serviceName.toLowerCase()} launches and receive exclusive early access.
              </p>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1"
                  type="email"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  Notify Me
                  <Bell className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll never spam you. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Early Access Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Early Access Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Join our early access program and get exclusive perks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Timeline
            </h2>
            <p className="text-lg text-gray-600">
              Track our progress as we build {serviceName.toLowerCase()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Planning & Design</h3>
                <p className="text-gray-600">Architecture design and user experience planning completed</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Development</h3>
                <p className="text-gray-600">Currently building core features and functionality</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Testing & Security</h3>
                <p className="text-gray-600">Comprehensive testing and security audits coming soon</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Launch</h3>
                <p className="text-gray-600">Public launch scheduled for {expectedLaunch}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have Questions About {serviceName}?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Our team is here to help. Contact us to learn more about the upcoming launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Us
              <Mail className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;