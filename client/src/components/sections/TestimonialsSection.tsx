
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, InnovateCorp',
      content: 'PayzuTech transformed our entire IT infrastructure. The cloud migration was seamless and our productivity increased by 40%.',
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
      content: 'The cybersecurity solutions provided by PayzuTech gave us complete confidence in our digital security posture.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Client Success</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about partnering with PayzuTech.
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
  );
};

export default TestimonialsSection;
