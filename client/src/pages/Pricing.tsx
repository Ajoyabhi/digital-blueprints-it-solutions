import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Building, CreditCard } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "one-time setup",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic API Integration",
        "Up to 5 endpoints",
        "Standard security setup",
        "Email support",
        "Documentation included"
      ],
      popular: false,
      icon: Zap
    },
    {
      name: "Professional",
      price: "$299",
      period: "monthly",
      description: "Most popular for growing businesses",
      features: [
        "Advanced API Integration",
        "Up to 50 endpoints",
        "Enhanced security protocols",
        "Priority support",
        "Custom documentation",
        "Monthly maintenance",
        "Performance monitoring"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited API endpoints",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantees",
        "On-site training"
      ],
      popular: false,
      icon: Building
    }
  ];

  const fintechPricing = [
    {
      service: "DMT (Domestic Money Transfer)",
      setupFee: "$500",
      transactionFee: "0.25% per transaction",
      monthlyFee: "$199"
    },
    {
      service: "BBPS (Bharat Bill Payment)",
      setupFee: "$300",
      transactionFee: "₹2 per transaction",
      monthlyFee: "$149"
    },
    {
      service: "AEPS Integration",
      setupFee: "$400",
      transactionFee: "₹3 per transaction",
      monthlyFee: "$179"
    },
    {
      service: "Mobile & DTH Recharge",
      setupFee: "$250",
      transactionFee: "1.5% per transaction",
      monthlyFee: "$99"
    },
    {
      service: "White-label B2B Software",
      setupFee: "$2,000",
      transactionFee: "Custom pricing",
      monthlyFee: "$499"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-electric-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-electric-500/20 text-electric-300 border-electric-500/30">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* General Service Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              IT Services Plans
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden ${
                    plan.popular 
                      ? 'border-electric-500 shadow-lg scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-electric-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-electric-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-navy-900">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-navy-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-electric-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-electric-500 hover:bg-electric-600' 
                          : 'bg-navy-900 hover:bg-navy-800'
                      } text-white`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fintech Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Fintech Services Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Specialized pricing for financial technology solutions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-navy-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Setup Fee</th>
                  <th className="px-6 py-4 text-left">Transaction Fee</th>
                  <th className="px-6 py-4 text-left">Monthly Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fintechPricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-navy-900">
                      {item.service}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item.setupFee}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item.transactionFee}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {item.monthlyFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Optional services to enhance your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-electric-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-navy-900">
                  API Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Dedicated API support and maintenance
                </p>
                <div className="text-2xl font-bold text-navy-900">
                  $99/month
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-electric-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-navy-900">
                  Custom Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tailored solutions for unique requirements
                </p>
                <div className="text-2xl font-bold text-navy-900">
                  $150/hour
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-electric-500 mx-auto mb-4" />
                <CardTitle className="text-xl font-bold text-navy-900">
                  Priority Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24/7 priority support with guaranteed response time
                </p>
                <div className="text-2xl font-bold text-navy-900">
                  $199/month
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us for a free consultation and custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-electric-600 hover:bg-gray-100 px-8 py-3"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;