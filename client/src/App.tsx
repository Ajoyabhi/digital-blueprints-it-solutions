import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CloudSolutions from "./pages/services/CloudSolutions";
import Cybersecurity from "./pages/services/Cybersecurity";
import AiMlServices from "./pages/services/AiMlServices";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ItInfrastructure from "./pages/services/ItInfrastructure";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import PaymentGateway from "./pages/fintech/PaymentGateway";
import PayoutGateway from "./pages/fintech/PayoutGateway";
import BusinessSoftware from "./pages/fintech/BusinessSoftware";
import CurrencyExchange from "./pages/fintech/CurrencyExchange";
import DigitalWallet from "./pages/fintech/DigitalWallet";
import TradingPlatform from "./pages/fintech/TradingPlatform";
import LendingPlatform from "./pages/fintech/LendingPlatform";
import InsuranceTech from "./pages/fintech/InsuranceTech";
import DomesticMoneyTransfer from "./pages/fintech/DomesticMoneyTransfer";
import UtilityPayments from "./pages/fintech/UtilityPayments";
import BBPSIntegration from "./pages/fintech/BBPSIntegration";
import MobileRecharge from "./pages/fintech/MobileRecharge";
import AEPSIntegration from "./pages/fintech/AEPSIntegration";
import WhiteLabel from "./pages/fintech/WhiteLabel";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const [url] = queryKey;
        const res = await fetch(url as string);
        if (!res.ok) {
          throw new Error(`Failed to fetch ${url}: ${res.status}`);
        }
        return res.json();
      },
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/services" component={Services} />
            <Route path="/services/cloud-solutions" component={CloudSolutions} />
            <Route path="/services/cybersecurity" component={Cybersecurity} />
            <Route path="/services/ai-ml-services" component={AiMlServices} />
            <Route path="/services/software-development" component={SoftwareDevelopment} />
            <Route path="/services/it-infrastructure" component={ItInfrastructure} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/case-studies/:slug" component={CaseStudyDetail} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/fintech/payment-gateway" component={PaymentGateway} />
            <Route path="/fintech/payout-gateway" component={PayoutGateway} />
            <Route path="/fintech/business-software" component={BusinessSoftware} />
            <Route path="/fintech/currency-exchange" component={CurrencyExchange} />
            <Route path="/fintech/digital-wallet" component={DigitalWallet} />
            <Route path="/fintech/trading-platform" component={TradingPlatform} />
            <Route path="/fintech/lending-platform" component={LendingPlatform} />
            <Route path="/fintech/insurance-tech" component={InsuranceTech} />
            <Route path="/fintech/dmt" component={DomesticMoneyTransfer} />
            <Route path="/fintech/utility-payments" component={UtilityPayments} />
            <Route path="/fintech/bbps" component={BBPSIntegration} />
            <Route path="/fintech/recharge" component={MobileRecharge} />
            <Route path="/fintech/aeps" component={AEPSIntegration} />
            <Route path="/fintech/white-label" component={WhiteLabel} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
