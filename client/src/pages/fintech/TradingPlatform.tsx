import React from 'react';
import ComingSoon from './ComingSoon';

const TradingPlatform = () => {
  return (
    <ComingSoon
      serviceName="Advanced Trading Platform"
      serviceDescription="Professional trading platform with advanced charting, algorithmic trading, and portfolio management tools for traders and financial institutions."
      expectedLaunch="Q4 2025"
      features={[
        "Advanced Charting Tools",
        "Algorithmic Trading",
        "Portfolio Management",
        "Risk Assessment",
        "Market Analytics",
        "Real-time Data Feeds",
        "Multi-asset Trading",
        "Social Trading Features",
        "Backtesting Engine",
        "Mobile Trading Apps",
        "Institutional Features",
        "API Access"
      ]}
    />
  );
};

export default TradingPlatform;