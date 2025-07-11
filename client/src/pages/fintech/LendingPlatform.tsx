import React from 'react';
import ComingSoon from './ComingSoon';

const LendingPlatform = () => {
  return (
    <ComingSoon
      serviceName="P2P Lending Platform"
      serviceDescription="Peer-to-peer lending platform connecting borrowers and lenders with AI-powered credit scoring, automated loan management, and comprehensive risk assessment."
      expectedLaunch="Q3 2025"
      features={[
        "AI Credit Scoring",
        "Automated Loan Processing",
        "Risk Assessment Tools",
        "Borrower Verification",
        "Loan Portfolio Management",
        "Real-time Matching",
        "Payment Processing",
        "Collections Management",
        "Regulatory Compliance",
        "Mobile Applications",
        "Analytics Dashboard",
        "Third-party Integrations"
      ]}
    />
  );
};

export default LendingPlatform;