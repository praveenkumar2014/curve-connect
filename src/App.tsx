import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Models from "./pages/Models";
import Campaigns from "./pages/Campaigns";
import CastingCalls from "./pages/CastingCalls";
import NotFound from "./pages/NotFound";
import Agencies from "./pages/Agencies";
import Search from "./pages/Search";
import Editorial from "./pages/Editorial";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PortfolioServices from "./pages/PortfolioServices";
import AgencyManagement from "./pages/AgencyManagement";
import CastingSubmit from "./pages/CastingSubmit";
import ModelsFashion from "./pages/ModelsFashion";
import ModelsCommercial from "./pages/ModelsCommercial";
import ModelsEditorial from "./pages/ModelsEditorial";
import ModelDetail from "./pages/ModelDetail";
import AgencyDetail from "./pages/AgencyDetail";
import NewFaces from "./pages/NewFaces";
import TopModels from "./pages/TopModels";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            
            {/* Models */}
            <Route path="/models" element={<Models />} />
            <Route path="/models/new-faces" element={<NewFaces />} />
            <Route path="/models/top-models" element={<TopModels />} />
            <Route path="/models/fashion" element={<ModelsFashion />} />
            <Route path="/models/commercial" element={<ModelsCommercial />} />
            <Route path="/models/editorial" element={<ModelsEditorial />} />
            <Route path="/models/:id" element={<ModelDetail />} />
            
            {/* Campaigns */}
            <Route path="/campaigns" element={<Campaigns />} />
            
            {/* Casting */}
            <Route path="/casting-calls" element={<CastingCalls />} />
            <Route path="/casting/submit" element={<CastingSubmit />} />
            
            {/* Agencies */}
            <Route path="/agencies" element={<Agencies />} />
            <Route path="/agencies/:id" element={<AgencyDetail />} />
            <Route path="/agencies/management" element={<AgencyManagement />} />
            
            {/* Services */}
            <Route path="/services/portfolio" element={<PortfolioServices />} />
            
            {/* Company */}
            <Route path="/company/about" element={<AboutUs />} />
            <Route path="/editorial" element={<Editorial />} />
            
            {/* Legal */}
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
            
            {/* Search */}
            <Route path="/search" element={<Search />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
