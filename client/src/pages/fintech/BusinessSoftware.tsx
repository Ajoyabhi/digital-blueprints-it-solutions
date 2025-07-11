import React from 'react';
import ComingSoon from './ComingSoon';

const BusinessSoftware = () => {
  return (
    <ComingSoon
      serviceName="Business Software Solutions"
      serviceDescription="Comprehensive business management software suite designed to streamline operations, enhance productivity, and drive growth for businesses of all sizes."
      expectedLaunch="Q2 2025"
      features={[
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Project Management & Collaboration",
        "Financial Management & Accounting",
        "Human Resources Management",
        "Inventory & Supply Chain Management",
        "Business Intelligence & Analytics",
        "Automated Workflow Management",
        "Multi-platform Mobile Apps",
        "Cloud-based Infrastructure",
        "Advanced Security & Compliance",
        "Third-party Integrations"
      ]}
    />
  );
};

export default BusinessSoftware;