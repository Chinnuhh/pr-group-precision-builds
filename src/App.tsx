import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Construction from "./pages/services/Construction";
import InteriorDesign from "./pages/services/InteriorDesign";
import Renovations from "./pages/services/Renovations";
import ModularKitchen from "./pages/design-ideas/ModularKitchen";
import WardrobeDesigns from "./pages/design-ideas/WardrobeDesigns";
import BathroomDesigns from "./pages/design-ideas/BathroomDesigns";
import MasterBedroomDesigns from "./pages/design-ideas/MasterBedroomDesigns";
import LivingRoomDesigns from "./pages/design-ideas/LivingRoomDesigns";
import TVUnitDesigns from "./pages/design-ideas/TVUnitDesigns";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/renovations" element={<Renovations />} />
          
          {/* Design Ideas Routes */}
          <Route path="/design-ideas/modular-kitchen" element={<ModularKitchen />} />
          <Route path="/design-ideas/wardrobe" element={<WardrobeDesigns />} />
          <Route path="/design-ideas/bathroom" element={<BathroomDesigns />} />
          <Route path="/design-ideas/master-bedroom" element={<MasterBedroomDesigns />} />
          <Route path="/design-ideas/living-room" element={<LivingRoomDesigns />} />
          <Route path="/design-ideas/tv-unit" element={<TVUnitDesigns />} />
          
          {/* Other Pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
