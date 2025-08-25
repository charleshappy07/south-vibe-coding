import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vibe from "./pages/Vibe";
import Program from "./pages/Program";

import Join from "./pages/Join";
import Resources from "./pages/Resources";
import Tools from "./pages/Tools";
import Calendar from "./pages/Calendar";
import Parents from "./pages/Parents";

import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vibe" element={<Vibe />} />
          <Route path="/program" element={<Program />} />
          
          <Route path="/join" element={<Join />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/parents" element={<Parents />} />
          
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
