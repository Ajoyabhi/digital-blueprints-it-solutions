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
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
