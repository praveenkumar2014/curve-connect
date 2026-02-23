import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

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
import Bridal from "./pages/Bridal";
import MakeupArtists from "./pages/MakeupArtists";
import Trainers from "./pages/Trainers";
import FitnessTrainers from "./pages/FitnessTrainers";
import NGO from "./pages/NGO";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Docs from "./pages/Docs";
import Notifications from "./pages/Notifications";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <AnimatePresence mode="wait">
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

                {/* Campaigns & Casting */}
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/casting-calls" element={<CastingCalls />} />
                <Route path="/casting/submit" element={<CastingSubmit />} />

                {/* Agencies */}
                <Route path="/agencies" element={<Agencies />} />
                <Route path="/agencies/:id" element={<AgencyDetail />} />
                <Route path="/agencies/management" element={<AgencyManagement />} />

                {/* Services */}
                <Route path="/services/portfolio" element={<PortfolioServices />} />
                <Route path="/bridal" element={<Bridal />} />
                <Route path="/makeup-artists" element={<MakeupArtists />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/fitness" element={<FitnessTrainers />} />
                <Route path="/ngo" element={<NGO />} />

                {/* Platform */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/team" element={<Team />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:username" element={<Profile />} />

                {/* Content */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Company */}
                <Route path="/company/about" element={<AboutUs />} />
                <Route path="/editorial" element={<Editorial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/search" element={<Search />} />

                {/* Legal */}
                <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                <Route path="/legal/terms" element={<TermsOfService />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
