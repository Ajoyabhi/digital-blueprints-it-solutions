import React from 'react';
import ComingSoon from './ComingSoon';

const UtilityPayments = () => {
  return (
    <ComingSoon
      serviceName="Utility Payment Collection"
      serviceDescription="Comprehensive utility payment collection platform supporting electricity, water, gas, and other essential services with automated billing and payment processing."
      expectedLaunch="Q2 2025"
      features={[
        "Multi-utility Support",
        "Automated Billing",
        "Payment Reminders",
        "Bulk Payment Processing",
        "Real-time Payment Status",
        "Invoice Generation",
        "Payment History",
        "Mobile App Integration",
        "Customer Portal",
        "Reporting & Analytics",
        "API Integration",
        "Regulatory Compliance"
      ]}
    />
  );
};

export default UtilityPayments;