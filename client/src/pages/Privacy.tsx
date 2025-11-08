
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Last updated: December 2024</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              PayzuTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name, email address, phone number</li>
                <li>Company name and job title</li>
                <li>Billing and payment information</li>
                <li>Communication preferences</li>
                <li>Technical requirements and project details</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referral sources and clickstream data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Provide and maintain our IT services</li>
              <li>Process transactions and manage billing</li>
              <li>Communicate with you about our services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and security threats</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
            <p className="text-gray-700 font-medium">We do not sell your personal information to third parties.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">We implement appropriate security measures including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and monitoring</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Your Rights (GDPR & CCPA Compliance)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Restriction:</strong> Request limitation of processing</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Opt-out:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-700">To exercise these rights, contact us at privacy@payzutech.com</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">We use cookies and similar technologies for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Essential website functionality</li>
              <li>Analytics and performance monitoring</li>
              <li>Personalization and preferences</li>
              <li>Marketing and advertising (with consent)</li>
            </ul>
            <p className="text-gray-700">You can manage cookie preferences through your browser settings.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We retain personal information only as long as necessary for the purposes outlined in this policy, 
              or as required by law. Client project data is retained according to contractual agreements, 
              typically 7 years for business records and 3 years for marketing data.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              If you are located outside the United States, please note that we may transfer your information 
              to the United States and other countries. We ensure appropriate safeguards are in place, 
              including Standard Contractual Clauses approved by the European Commission.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Our services are not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If we become aware of such collection, we will delete 
              the information immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of any material changes 
              by posting the new policy on our website and updating the "Last updated" date. 
              Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-navy-800">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-gray-700">For questions about this Privacy Policy, contact us at:</p>
            <div className="text-gray-700">
              <p><strong>Email:</strong> privacy@payzutech.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> PayzuTech, 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
