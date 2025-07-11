import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  Shield, 
  Clock, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Users,
  Building,
  CreditCard,
  Zap,
  FileText
} from 'lucide-react';

const PayoutGateway = () => {
  const features = [
    {
      icon: Wallet,
      title: "Multi-Currency Payouts",
      description: "Send payments in 100+ currencies to recipients worldwide"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Advanced fraud detection and secure payment processing"
    },
    {
      icon: Clock,
      title: "Instant Transfers",
      description: "Real-time payouts to bank accounts and digital wallets"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Reach recipients in 200+ countries and territories"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Comprehensive transaction reports and compliance documentation"
    },
    {
      icon: Users,
      title: "Bulk Processing",
      description: "Process thousands of payouts simultaneously with bulk operations"
    }
  ];

  const payoutMethods = [
    { name: "Bank Transfer", fee: "$2.50", time: "1-2 business days" },
    { name: "Instant Transfer", fee: "$5.00", time: "Minutes" },
    { name: "Digital Wallet", fee: "$1.00", time: "Instant" },
    { name: "Debit Card", fee: "$3.00", time: "Minutes" },
    { name: "Wire Transfer", fee: "$15.00", time: "Same day" },
    { name: "Cryptocurrency", fee: "$2.00", time: "10-30 minutes" },
  ];

  const useCases = [
    {
      title: "Marketplace Payments",
      description: "Pay sellers, vendors, and service providers instantly",
      icon: Building
    },
    {
      title: "Gig Economy",
      description: "Compensate freelancers and contractors efficiently",
      icon: Users
    },
    {
      title: "Insurance Claims",
      description: "Process insurance payouts quickly and securely",
      icon: Shield
    },
    {
      title: "Affiliate Programs",
      description: "Reward partners and affiliates automatically",
      icon: DollarSign
    }
  ];

  const benefits = [
    "Reduce payout processing time by 90%",
    "Eliminate manual payment processes",
    "Ensure compliance with global regulations",
    "Provide real-time payment status updates",
    "Reduce operational costs by 60%",
    "Improve recipient satisfaction with faster payments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-400">
              Payout Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Payout Gateway
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Send money to anyone, anywhere in the world. Our payout gateway enables 
              instant, secure, and cost-effective mass payments to your recipients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                Start Sending Payouts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 text-lg">
                View Integration Guide
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
              Powerful Payout Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our payout gateway provides everything you need to send payments globally 
              with speed, security, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
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

      {/* Payout Methods Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Payout Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose from multiple payout methods to meet your recipients' preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payoutMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-green-500" />
                    {method.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-medium">{method.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{method.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business Model
            </h2>
            <p className="text-lg text-gray-600">
              Our payout gateway serves diverse industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Streamline Your Payout Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform how you handle payouts with our automated, secure, and 
                globally compliant payout gateway solution.
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or long-term contracts</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Setup Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Monthly Fee</span>
                  <span className="text-green-600 font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Per Transaction</span>
                  <span className="font-bold">Starting at $1.00</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Payouts?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who trust our payout gateway for their mass payment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Schedule Demo
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
              View API Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutGateway;