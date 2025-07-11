import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Wallet,
  Building,
  Users
} from 'lucide-react';

const PaymentGateway = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Accept credit cards, debit cards, digital wallets, and bank transfers"
    },
    {
      icon: Shield,
      title: "PCI DSS Compliant",
      description: "Bank-level security with end-to-end encryption and fraud protection"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time payment processing with immediate transaction confirmations"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for 150+ currencies and international payment methods"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless mobile payment experience with responsive checkout"
    },
    {
      icon: Building,
      title: "Enterprise Ready",
      description: "Scalable infrastructure supporting high-volume transactions"
    }
  ];

  const paymentMethods = [
    { name: "Visa", supported: true },
    { name: "Mastercard", supported: true },
    { name: "American Express", supported: true },
    { name: "PayPal", supported: true },
    { name: "Apple Pay", supported: true },
    { name: "Google Pay", supported: true },
    { name: "Bank Transfer", supported: true },
    { name: "Cryptocurrency", supported: true },
  ];

  const benefits = [
    "Reduce cart abandonment by 40% with streamlined checkout",
    "Increase conversion rates with trusted payment options",
    "Automate recurring billing and subscription management",
    "Real-time analytics and detailed transaction reporting",
    "24/7 customer support and technical assistance",
    "Easy integration with existing e-commerce platforms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-electric-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-electric-500/20 text-electric-300 border-electric-400">
              Payment Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Payment Gateway
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accept payments from customers worldwide with our secure, scalable payment gateway. 
              Built for businesses of all sizes with enterprise-grade security and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-electric-500 hover:bg-electric-600 text-white px-8 py-3 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Payment Gateway?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our payment gateway combines cutting-edge security with seamless user experience 
              to help your business grow faster and more securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-electric-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-electric-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Payment Methods
            </h2>
            <p className="text-lg text-gray-600">
              Accept payments through all major payment methods and digital wallets
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{method.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drive More Sales with Seamless Payments
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our payment gateway is designed to maximize your conversion rates while 
                providing the security and reliability your customers expect.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-gray-600">Join thousands of businesses using our payment gateway</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Setup Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Transaction Fee</span>
                  <span className="font-bold">2.9% + 30¢</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Monthly Fee</span>
                  <span className="text-green-600 font-bold">$0</span>
                </div>
                <Button className="w-full bg-electric-500 hover:bg-electric-600 text-white py-3 text-lg">
                  Start Integration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-electric-600 to-electric-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-3xl mx-auto">
            Get started with our payment gateway today and start accepting payments in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Sales
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-electric-600 px-8 py-3 text-lg">
              View API Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;