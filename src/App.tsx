
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import MemberArea from "./pages/MemberArea";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import NutrientDeficiencies from "./pages/blog/NutrientDeficiencies";
import MigrainAura from "./pages/blog/MigrainAura";
import SleepLightDiet from "./pages/blog/SleepLightDiet";
import NaturalMigrainRelief from "./pages/blog/NaturalMigrainRelief";
import MigrainTracking from "./pages/blog/MigrainTracking";
import StressMigrainConnection from "./pages/blog/StressMigrainConnection";
import HormonalMigraines from "./pages/blog/HormonalMigraines";
import MedicationCycle from "./pages/blog/MedicationCycle";
import ExercisePrevention from "./pages/blog/ExercisePrevention";
import MigraineFriendlyEnvironment from "./pages/blog/MigraineFriendlyEnvironment";

console.log('App.tsx: Initializing QueryClient...');
console.log('App.tsx: Current timestamp:', Date.now());
const queryClient = new QueryClient();

const App = () => {
  console.log('App.tsx: Rendering App component...');
  console.log('App.tsx: SSL/TLS Status:', location.protocol);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/nutrient-deficiencies" element={<NutrientDeficiencies />} />
            <Route path="/blog/migraine-aura" element={<MigrainAura />} />
            <Route path="/blog/sleep-light-diet" element={<SleepLightDiet />} />
            <Route path="/blog/natural-migraine-relief" element={<NaturalMigrainRelief />} />
            <Route path="/blog/migraine-tracking" element={<MigrainTracking />} />
            <Route path="/blog/stress-migraine-connection" element={<StressMigrainConnection />} />
            <Route path="/blog/hormonal-migraines" element={<HormonalMigraines />} />
            <Route path="/blog/medication-cycle" element={<MedicationCycle />} />
            <Route path="/blog/exercise-prevention" element={<ExercisePrevention />} />
            <Route path="/blog/migraine-friendly-environment" element={<MigraineFriendlyEnvironment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/member-area" element={<MemberArea />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
