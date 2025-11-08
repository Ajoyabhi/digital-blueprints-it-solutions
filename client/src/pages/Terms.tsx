
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 text-lg">Last updated: December 2024</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              By accessing and using PayzuTech's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, you should not use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Description of Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">PayzuTech provides IT consulting and services including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cloud infrastructure design and migration</li>
              <li>Cybersecurity assessments and implementations</li>
              <li>AI/ML development and integration</li>
              <li>Custom software development</li>
              <li>IT infrastructure management</li>
              <li>Technical consulting and support</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Use License and Restrictions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Subject to compliance with these terms, we grant you a limited, non-exclusive license to use our services. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use our services to transmit harmful code or content</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Client Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">As our client, you are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Providing accurate and complete information</li>
              <li>Timely payment of all fees and charges</li>
              <li>Maintaining the confidentiality of access credentials</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Providing necessary access to systems and data</li>
              <li>Backing up critical data before any system modifications</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Fees and Billing</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All fees are due within 30 days of invoice date</li>
                <li>Late payments may incur a 1.5% monthly service charge</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Travel expenses may be billed separately</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Refund Policy</h3>
              <p className="text-gray-700">
                Refunds for services are considered on a case-by-case basis. 
                Generally, completed work is non-refundable, but we will work with clients 
                to resolve any satisfaction issues.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Our IP</h3>
              <p className="text-gray-700">
                PayzuTech retains all rights to our methodologies, tools, templates, 
                and pre-existing intellectual property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Client IP</h3>
              <p className="text-gray-700">
                You retain ownership of your data and any intellectual property you provide. 
                Custom developments created specifically for you will be owned by you upon full payment.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Confidentiality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We maintain strict confidentiality regarding all client information and business processes. 
              Our team members sign confidentiality agreements, and we implement appropriate security 
              measures to protect your sensitive information. This obligation survives termination of our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Service Level Agreements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Response Time:</strong> 24 hours for critical issues, 48 hours for standard requests</li>
              <li><strong>Uptime:</strong> 99.9% uptime for managed services</li>
              <li><strong>Data Recovery:</strong> 4-hour RTO, 1-hour RPO for disaster recovery services</li>
              <li><strong>Security:</strong> Immediate response to security incidents</li>
            </ul>
            <p className="text-gray-700">
              Service credits may apply for failure to meet agreed SLAs as outlined in specific service agreements.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              To the maximum extent permitted by law, PayzuTech shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including loss of profits, data, or business 
              interruption, arising from your use of our services.
            </p>
            <p className="text-gray-700">
              Our total liability for any claim shall not exceed the amount paid for the specific service 
              that gave rise to the claim during the 12 months preceding the incident.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Indemnification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless PayzuTech from any claims, damages, or expenses 
              arising from your violation of these terms, your use of our services, or your violation of any 
              rights of a third party.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">Either party may terminate services with 30 days written notice. We may terminate immediately if:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>You violate these terms</li>
              <li>Payment is more than 60 days overdue</li>
              <li>You engage in fraudulent activity</li>
              <li>Legal or regulatory requirements necessitate termination</li>
            </ul>
            <p className="text-gray-700">
              Upon termination, you remain liable for all accrued fees and we will provide reasonable 
              assistance in transitioning services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Force Majeure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Neither party shall be liable for any failure to perform due to circumstances beyond their reasonable 
              control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Any disputes arising from these terms or our services shall be resolved through:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Good faith negotiation between the parties</li>
              <li>Mediation by a mutually agreed mediator</li>
              <li>Binding arbitration under the rules of the American Arbitration Association</li>
            </ol>
            <p className="text-gray-700">
              These terms are governed by the laws of California, United States.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will notify you of material changes 
              via email or website notice. Continued use of our services after such changes constitutes 
              acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-gray-700">For questions about these Terms of Service, contact us at:</p>
            <div className="text-gray-700">
              <p><strong>Email:</strong> legal@payzutech.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> PayzuTech, 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
